import { groq } from "@sanity/groq-store";
import LaunchDarkly from "launchdarkly-node-client-sdk";

import { sanityClient } from "~/lib/sanity/getClient";
import type { Page, AbTest } from "~/lib/types";

type GetPageParams = {
  slug: string;
  userId: string;
};

const getPageQuery = groq`*[_type == "page" && slug.current == $slug][0]`;

export async function getPage({ slug, userId }: GetPageParams): Promise<Page> {
  const abTest = await getAbTest({ slug });

  if (!abTest) {
    return sanityClient.fetch(getPageQuery, { slug });
  }

  const ldClient = LaunchDarkly.initialize("631da97c19849f10feeb3da8", {
    key: userId,
  });

  await ldClient.waitForInitialization();

  const flagKey = slug === "/" ? "homepage" : slug.replace(/\//g, "-");
  const flagValue = ldClient.variation(flagKey, false);
  console.debug({ flagKey, flagValue });

  return (
    abTest.variations.find(({ key }) => key === flagValue)?.page ||
    abTest.variations[0].page
  );
}

type GetAbTestParams = {
  slug: string;
};

const getAbTestQuery = groq`*[_type == "abTest" && slug.current == $slug][0] {
  ...,
  variations[] {
    ...,
    page->
  }
}`;

function getAbTest({ slug }: GetAbTestParams): Promise<AbTest> {
  return sanityClient.fetch(getAbTestQuery, { slug });
}
