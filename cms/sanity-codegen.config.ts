import { SanityCodegenConfig } from "sanity-codegen";
import { defaultBabelOptions } from "sanity-codegen/cli";

const config: SanityCodegenConfig = {
  schemaPath: "./localization/localizeSchemas.ts",
  outputPath: "../frontend/app/lib/types/gen-types.ts",
  babelOptions: {
    ...defaultBabelOptions,
    ignore: [],
    plugins: [
      ...defaultBabelOptions.plugins.filter(
        (plugin) => plugin[0] !== "module-resolver"
      ),
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "~schemas": "./schemas",
            "~locales": "../locales",
            "^part:.*": "sanity-codegen/no-op",
            "^all:part.*": "sanity-codegen/no-op",
            "^@sanity.*": "sanity-codegen/no-op",
            "^.*Translations.*$": "sanity-codegen/no-op",
            "./components/Translations": "sanity-codegen/no-op",
          },
        },
      ],
    ],
  },
};

export default config;
