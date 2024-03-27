import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    coverage: {
      provider: "v8",
      enabled: true,
      include: ["**/src/lib/**"],
      exclude: ["**/index.ts"],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
    setupFiles: "./setup-test.ts",
  },
});
