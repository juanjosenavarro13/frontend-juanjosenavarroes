// vite.config.ts
import { defineConfig } from "file:///C:/dev/juanjosenavarroes/frontend-juanjosenavarroes/node_modules/.pnpm/vitest@1.6.0_@types+node@20.14.11_@vitest+ui@1.6.0_happy-dom@14.12.3_jsdom@24.1.1/node_modules/vitest/dist/config.js";
import react from "file:///C:/dev/juanjosenavarroes/frontend-juanjosenavarroes/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_vite@5.3.5_@types+node@20.14.11_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import * as path from "path";
import { TanStackRouterVite } from "file:///C:/dev/juanjosenavarroes/frontend-juanjosenavarroes/node_modules/.pnpm/@tanstack+router-plugin@1.45.8_vite@5.3.5_@types+node@20.14.11_/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var __vite_injected_original_dirname = "C:\\dev\\juanjosenavarroes\\frontend-juanjosenavarroes";
var excludeTestFiles = [
  "src/tests/**",
  "src/core/**",
  "src/**/index.ts",
  "src/features/**",
  "src/routes/**",
  "src/ui/app.tsx",
  "src/routeTree.gen.ts"
];
var vite_config_default = defineConfig({
  plugins: [TanStackRouterVite(), react()],
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {}
      }
    }
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "./src") }]
  },
  server: {
    port: 3e3
  },
  test: {
    css: true,
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      thresholds: {
        "100": false
      },
      enabled: true,
      include: ["src/**"],
      exclude: excludeTestFiles
    },
    reporters: process.env.GITHUB_ACTIONS ? ["dot", "github-actions"] : ["dot"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: excludeTestFiles,
    setupFiles: "./setup-test.tsx",
    server: {
      deps: {
        inline: ["library-juanjosenavarroes"]
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxkZXZcXFxcanVhbmpvc2VuYXZhcnJvZXNcXFxcZnJvbnRlbmQtanVhbmpvc2VuYXZhcnJvZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXGRldlxcXFxqdWFuam9zZW5hdmFycm9lc1xcXFxmcm9udGVuZC1qdWFuam9zZW5hdmFycm9lc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovZGV2L2p1YW5qb3NlbmF2YXJyb2VzL2Zyb250ZW5kLWp1YW5qb3NlbmF2YXJyb2VzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVzdC9jb25maWdcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGUgfSBmcm9tIFwiQHRhbnN0YWNrL3JvdXRlci1wbHVnaW4vdml0ZVwiO1xyXG5cclxuY29uc3QgZXhjbHVkZVRlc3RGaWxlcyA9IFtcclxuICBcInNyYy90ZXN0cy8qKlwiLFxyXG4gIFwic3JjL2NvcmUvKipcIixcclxuICBcInNyYy8qKi9pbmRleC50c1wiLFxyXG4gIFwic3JjL2ZlYXR1cmVzLyoqXCIsXHJcbiAgXCJzcmMvcm91dGVzLyoqXCIsXHJcbiAgXCJzcmMvdWkvYXBwLnRzeFwiLFxyXG4gIFwic3JjL3JvdXRlVHJlZS5nZW4udHNcIixcclxuXTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1RhblN0YWNrUm91dGVyVml0ZSgpLCByZWFjdCgpXSxcclxuICBidWlsZDoge1xyXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgY3NzTWluaWZ5OiB0cnVlLFxyXG4gICAgbWluaWZ5OiB0cnVlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3M6IHt9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiBbeyBmaW5kOiBcIkBcIiwgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIikgfV0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgfSxcclxuICB0ZXN0OiB7XHJcbiAgICBjc3M6IHRydWUsXHJcbiAgICBnbG9iYWxzOiB0cnVlLFxyXG4gICAgZW52aXJvbm1lbnQ6IFwiaGFwcHktZG9tXCIsXHJcbiAgICBjb3ZlcmFnZToge1xyXG4gICAgICBwcm92aWRlcjogXCJ2OFwiLFxyXG4gICAgICB0aHJlc2hvbGRzOiB7XHJcbiAgICAgICAgXCIxMDBcIjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IFtcInNyYy8qKlwiXSxcclxuICAgICAgZXhjbHVkZTogZXhjbHVkZVRlc3RGaWxlcyxcclxuICAgIH0sXHJcbiAgICByZXBvcnRlcnM6IHByb2Nlc3MuZW52LkdJVEhVQl9BQ1RJT05TID8gW1wiZG90XCIsIFwiZ2l0aHViLWFjdGlvbnNcIl0gOiBbXCJkb3RcIl0sXHJcbiAgICBpbmNsdWRlOiBbXCJzcmMvKiovKi57dGVzdCxzcGVjfS57dHMsdHN4fVwiXSxcclxuICAgIGV4Y2x1ZGU6IGV4Y2x1ZGVUZXN0RmlsZXMsXHJcbiAgICBzZXR1cEZpbGVzOiBcIi4vc2V0dXAtdGVzdC50c3hcIixcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBkZXBzOiB7XHJcbiAgICAgICAgaW5saW5lOiBbXCJsaWJyYXJ5LWp1YW5qb3NlbmF2YXJyb2VzXCJdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVixTQUFTLG9CQUFvQjtBQUNoWCxPQUFPLFdBQVc7QUFDbEIsWUFBWSxVQUFVO0FBQ3RCLFNBQVMsMEJBQTBCO0FBSG5DLElBQU0sbUNBQW1DO0FBS3pDLElBQU0sbUJBQW1CO0FBQUEsRUFDdkI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7QUFBQSxFQUN2QyxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjLENBQUM7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBa0IsYUFBUSxrQ0FBVyxPQUFPLEVBQUUsQ0FBQztBQUFBLEVBQ3RFO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osS0FBSztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLFFBQ1YsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxNQUNULFNBQVMsQ0FBQyxRQUFRO0FBQUEsTUFDbEIsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFdBQVcsUUFBUSxJQUFJLGlCQUFpQixDQUFDLE9BQU8sZ0JBQWdCLElBQUksQ0FBQyxLQUFLO0FBQUEsSUFDMUUsU0FBUyxDQUFDLCtCQUErQjtBQUFBLElBQ3pDLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxRQUNKLFFBQVEsQ0FBQywyQkFBMkI7QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
