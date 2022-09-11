import type { LoaderFunction } from "@remix-run/node";

import { getPage } from "~/services/page";
export { default } from "./$";

export const loader: LoaderFunction = async ({ request }) => {
  const requestUrl = new URL(request?.url);
  const preview =
    requestUrl?.searchParams?.get("preview") ===
    process.env.SANITY_PREVIEW_SECRET;
  const page = await getPage({ slug: "/", preview });

  return {
    page,
    preview,
  };
};
