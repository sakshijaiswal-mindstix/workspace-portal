import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@workspace/button": path.resolve(__dirname, "../../packages/button/src"),
      "@workspace/ProductBox": path.resolve(__dirname, "../../packages/ProductBox/src"),
      "@workspace/Modal": path.resolve(__dirname, "../../packages/Modal/src"),
      src: path.resolve(__dirname, "./src"),
    },
  },
});
