import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPage } from "~/services/page";
import type { Page } from "~/lib/types";

export type Loader = {
  page: Page;
};

export const loader: LoaderFunction = async ({ params }) => {
  const page = await getPage({ slug: params["*"] as string, preview: false });

  if (!page) {
    return redirect("/404");
  }

  return {
    page,
  };
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
