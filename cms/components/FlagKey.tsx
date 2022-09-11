import React from "react";
import { FormField } from "@sanity/base/components";
import { Card } from "@sanity/ui";
import { ChevronRightIcon } from "@sanity/icons";
// @ts-ignore
import { withDocument } from "part:@sanity/form-builder";
import { useId } from "@reach/auto-id";

const Variant = React.forwardRef((props: any, ref) => {
  const { type, markers, presence } = props;

  const inputId = useId();

  const slug = props.document?.slug?.current;
  const flagKey = slug === "/" ? "homepage" : slug.replaceAll("/", "-");

  return (
    <FormField
      description={type.description}
      title={type.title}
      __unstable_markers={markers}
      __unstable_presence={presence}
      inputId={inputId}
      disabled
    >
      <a
        href={`https://app.launchdarkly.com/default/production/features/${flagKey}`}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <Card shadow={1} padding={2} tone="primary">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {flagKey}
            <ChevronRightIcon fontSize={"calc(25 / 16 * 1rem)"} />
          </div>
        </Card>
      </a>
    </FormField>
  );
});

export default withDocument(Variant);
