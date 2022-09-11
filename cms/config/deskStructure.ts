import S from "@sanity/desk-tool/structure-builder";
import DocumentsPane from "sanity-plugin-documents-pane";

export const getDefaultDocumentNode = ({ documentId, schemaType }) => {
  if (schemaType === "page") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(DocumentsPane)
        .options({
          query: `*[_type == "abTest" && references($id)]`,
          params: { id: "_id" },
        })
        .title("A/B Tests")
        .icon(() => "🧪"),
    ]);
  }
};

export default () => S.list().title("Content").items(S.documentTypeListItems());
