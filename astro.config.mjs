import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import jsconfigPaths from "vite-jsconfig-paths";

import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://emadbaqeri.github.io",
  vite: {
    resolve: {
      alias: {
        "@": "src",
        "@utils": "src/utils",
        "@styles": "src/styles",
        "@assets": "src/assets",
        "@layouts": "src/layouts",
        "@components": "src/components",
      },
    },
    plugins: [jsconfigPaths()],
  },

  server: {
    port: 3000,
  },

  integrations: [
    sitemap(),
    mdx({
      gfm: true,
      shikiConfig: {
        theme: "dark-plus",
      },
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
          },
        ],
      ],
      extendPlugins: false,
    }),
    icon(),
    tailwind(),
  ],
});
