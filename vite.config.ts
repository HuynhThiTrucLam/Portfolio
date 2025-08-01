import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: ["chrome88", "safari14", "firefox78", "edge88"],
    cssTarget: ["chrome88", "safari14", "firefox78", "edge88"],
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    minify: "esbuild",
  },
  css: {
    postcss: "./postcss.config.js",
  },
  esbuild: {
    target: ["chrome88", "safari14", "firefox78", "edge88"],
  },
});
