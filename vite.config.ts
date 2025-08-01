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
      // Disable platform-specific optimizations that might cause issues
      external: [],
    },
    // Ensure we don't use platform-specific binaries
    minify: "esbuild",
  },
  css: {
    postcss: "./postcss.config.js",
  },
  esbuild: {
    target: ["chrome88", "safari14", "firefox78", "edge88"],
  },
  // Add optimizeDeps configuration to avoid platform-specific issues
  optimizeDeps: {
    exclude: [
      "@rollup/rollup-linux-x64-gnu",
      "@rollup/rollup-linux-x64-musl",
      "@rollup/rollup-darwin-x64",
      "@rollup/rollup-darwin-arm64",
      "@rollup/rollup-win32-x64-msvc",
    ],
  },
});
