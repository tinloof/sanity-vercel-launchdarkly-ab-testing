import { useEffect, useState } from "react";

import config from "./config";

type SubscriptionOptions = {
  initialData: any;
  params?: any;
  preview: boolean;
};

export default function usePreviewSubscription(
  query: string,
  subscriptionOptions: SubscriptionOptions
) {
  const { params, initialData, preview } = subscriptionOptions;
  const [data, setData] = useState(initialData);

  useEffect(() => {
    let sub: any;
    let store: any;

    if (!preview) {
      return;
    }

    async function createStore() {
      const {
        default: { groqStore },
      } = await import("@sanity/groq-store");

      const { projectId, dataset } = config;

      store = groqStore({
        projectId,
        dataset,
        listen: true,
        overlayDrafts: true,
        documentLimit: 1000,
      });

      store.subscribe(
        query,
        params ?? {}, // Params
        (err: any, result: any) => {
          if (err) {
            console.error("Oh no, an error:", err);
            return;
          }
          setData(result);
        }
      );
    }

    if (!store) {
      createStore();
    }

    return () => {
      if (sub?.unsubscribe()) sub.unsubscribe();
      if (store) store.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preview]);

  return { data };
}
