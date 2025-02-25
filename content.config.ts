import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
    json: defineCollection({
      type: "page",
      source: "**/*.json",
    }),
  },
});
