import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["istanbul"], // for coverage
      },
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      "@workspace": path.resolve(__dirname, "../../packages"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
});
