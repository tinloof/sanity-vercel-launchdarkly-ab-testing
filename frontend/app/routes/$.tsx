import type { LoaderFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPage } from "~/services/page";
import { user } from "~/cookies";
import { generateUserId } from "~/lib/utils";
import type { Page } from "~/lib/types";

export type Loader = {
  page: Page;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const cookieHeader = request.headers.get("Cookie");
  const userCookie = (await user.parse(cookieHeader)) || {};

  const userId = userCookie.userId ?? generateUserId();

  if (!userCookie.userId) {
    userCookie.userId = userId;
  }

  const page = await getPage({ slug: params["*"] as string, userId });

  if (!page) {
    return redirect("/404");
  }

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

export default function LandingPage() {
  const { page } = useLoaderData() as Loader;
  return (
    <div
      style={{
        width: 500,
        margin: "64px auto",
        maxWidth: "100%",
      }}
    >
      <h1>{page.title}</h1>
    </div>
  );
}
