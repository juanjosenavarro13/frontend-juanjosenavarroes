import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const excludeTestFiles = [
  "src/tests/**",
  "src/core/**",
  "src/**/index.ts",
  "src/features/**",
  "src/routes/**",
  "src/ui/app.tsx",
  "src/routeTree.gen.ts",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
  server: {
    port: 3000,
  },
  test: {
    css: true,
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      thresholds: {
        "100": false,
      },
      enabled: true,
      include: ["src/**"],
      exclude: excludeTestFiles,
    },
    reporters: process.env.GITHUB_ACTIONS ? ["dot", "github-actions"] : ["dot"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: excludeTestFiles,
    setupFiles: "./setup-test.tsx",
    server: {
      deps: {
        inline: ["library-juanjosenavarroes"],
      },
    },
  },
});
