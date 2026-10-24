import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lumen.fungicode.io",
  trailingSlash: "always",
  build: { format: "directory" },
});
