/* eslint-disable */
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import bun from "astro-bun";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: bun(),
});
