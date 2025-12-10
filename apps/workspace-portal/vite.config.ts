import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["istanbul"],
      },
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      "@workspace": path.resolve(__dirname, "../../packages"),
    },
  },
});
