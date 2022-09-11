import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getPage } from "~/services/page";
import { user } from "~/cookies";
import { generateUserId } from "~/lib/utils";
export { default } from "./$";

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const userCookie = (await user.parse(cookieHeader)) || {};

  const userId = userCookie.userId ?? generateUserId();

  if (!userCookie.userId) {
    userCookie.userId = userId;
  }

  const page = await getPage({ slug: "/", userId });

  return json(
    {
      page,
    },
    {
      headers: {
        "Set-Cookie": await user.serialize(userCookie),
        "Cache-Control": "s-maxage=60, stale-while-revalidate=86400",
      },
    }
  );
};
