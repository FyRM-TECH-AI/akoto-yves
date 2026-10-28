// @lovable.dev/vite-tanstack-config already includes the core plugins — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [{ enforce: "pre", ...mdx() }],
  },
});
