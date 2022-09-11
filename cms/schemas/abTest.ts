import FlagKey from "../components/FlagKey";

export default {
  name: "abTest" as "abTest",
  title: "A/B Tests",
  type: "document",
  icon: () => "🧪",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: "flag",
      title: "LaunchDarkly flag key",
      type: "string",
      hidden: ({ parent }) => !parent?.slug?.current,
      inputComponent: FlagKey,
    },
    {
      name: "variations",
      title: "Variations",
      type: "array",
      of: [
        {
          name: "variation",
          type: "object",
          icon: false,
          preview: {
            select: { title: "key" },
            prepare: ({ title }: { title: string }) => ({
              title: `${title.charAt(0).toUpperCase()}${title.substring(1)}`,
            }),
          },
          fields: [
            {
              name: "key",
              title: "Key",
              type: "string",
              options: {
                list: ["control", "variant"],
              },
              validation: (Rule) => Rule.required(),
              codegen: { required: true },
            },
            {
              name: "page",
              title: "Page",
              type: "reference",
              to: [{ type: "page" }],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
  ],
};
