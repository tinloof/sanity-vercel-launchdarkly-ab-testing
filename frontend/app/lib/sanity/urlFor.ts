import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import config from "./config";

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(config as typeof config)
    .image(source)
    .auto("format");
