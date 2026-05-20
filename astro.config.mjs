import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://maipal.org",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
});
