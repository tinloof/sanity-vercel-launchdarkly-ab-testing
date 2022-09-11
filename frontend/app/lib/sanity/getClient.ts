import PicoSanity from "picosanity";

import config from "./config";

export const sanityClient = new PicoSanity({
  ...config,
  useCdn: process.env.NODE_ENV === "production",
});

const previewClient = new PicoSanity({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN ?? ``,
});

export default (usePreview = false) =>
  usePreview ? previewClient : sanityClient;
