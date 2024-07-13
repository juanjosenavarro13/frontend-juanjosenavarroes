import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    minify: true,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      {
        find: "@portfolio",
        replacement: path.resolve(__dirname, "./src/features/portfolio"),
      },
    ],
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      thresholds: {
        "100": false,
      },
      enabled: true,
      include: ["src/**"],
      exclude: ["src/core/**", "src/**/index.ts"],
    },
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["tests/**"],
    setupFiles: "./setup-test.ts",
  },
});
