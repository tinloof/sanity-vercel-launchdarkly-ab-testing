// @ts-ignore
import createSchema from "part:@sanity/base/schema-creator";
// @ts-ignore
import schemaTypes from "all:part:@sanity/base/schema-type";

import page from "./page";
import abTest from "./abTest";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([page, abTest]),
});
