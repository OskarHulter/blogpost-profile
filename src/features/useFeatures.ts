export type FeatureFlag = {
  name: string;
  state: boolean;
  description: string;
  url: string;
}
export function useFeatures() {
  return {
    features: [{
      name: "relevance-sorting-active",
      state: true,
      description: "Relevance Sorting Kill Switch",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "variant-active",
      state: false,
      description: "New Variant Kill Switch",
      url: "https://www.typescriptlang.org/",
    }
    ],
  };
}

export type FeatureFlags = ReturnType<typeof useFeatures>["features"];
