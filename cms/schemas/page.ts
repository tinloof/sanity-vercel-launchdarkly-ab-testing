export default {
  name: "page" as "page",
  title: "Pages",
  icon: () => "📄",
  type: "document",
  translate: true,
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
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      options: {
        source: "title",
      },
    },
    {
      name: "theme",
      title: "Theme",
      type: "string",
      initialValue: "light",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      options: {
        list: ["light", "dark"],
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
};
