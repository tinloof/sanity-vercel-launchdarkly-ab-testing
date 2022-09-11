import type locales from "~locales";
import type * as baseTypes from "./gen-types";

export type Header = Omit<baseTypes.Header, "pages"> & {
  pages: baseTypes.SanityKeyed<baseTypes.Page>[];
};

export type Page = Omit<baseTypes.Page, "translations"> & {
  translations: Record<typeof locales[number]["name"], baseTypes.Page>;
};
