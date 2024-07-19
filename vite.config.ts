import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          ckeditor5: ["ckeditor5"],
          tanstack: ["@tanstack/react-query", "@tanstack/react-query-devtools"],
          testing: [
            "@testing-library/react",
            "@testing-library/jest-dom",
            "@testing-library/user-event",
          ],
          i18next: ["i18next", "i18next-http-backend", "react-i18next"],
          axios: ["axios"],
          zustand: ["zustand"],
          zod: ["zod"],
        },
      },
    },
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
    reporters: process.env.GITHUB_ACTIONS ? ["dot", "github-actions"] : ["dot"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["tests/**"],
    setupFiles: "./setup-test.tsx",
  },
});
