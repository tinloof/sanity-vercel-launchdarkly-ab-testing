import type * as baseTypes from "./gen-types";

export type Page = baseTypes.Page;

export type Variation = Omit<baseTypes.AbTest["variations"][number], "page"> & {
  page: Page;
};

export type AbTest = Omit<baseTypes.AbTest, "variations"> & {
  variations: Variation[];
};
