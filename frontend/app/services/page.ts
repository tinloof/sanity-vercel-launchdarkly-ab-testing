import { groq } from "@sanity/groq-store";
import getClient from "~/lib/sanity/getClient";
import type { Page } from "~/lib/types";

const getPageQuery = groq`*[_type == "page" && slug.current == $slug][0]`;

type GetPageParams = {
  slug: string;
  preview: boolean;
};

export function getPage({ slug, preview }: GetPageParams): Promise<Page> {
  return getClient(preview).fetch(getPageQuery, { slug });
}
