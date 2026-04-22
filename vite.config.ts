import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// `BASE_PATH` is set by the GitHub Pages deploy workflow to `/<repo>/`.
// Falls back to `/` for local dev and user-page / custom-domain deploys.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Split the React runtime into its own chunk for better caching.
        manualChunks: (id) => {
          if (
            id.includes("node_modules/react-router") ||
            id.includes("node_modules/react-dom") ||
            id.match(/node_modules\/react\//)
          ) {
            return "react";
          }
          return undefined;
        },
      },
    },
  },
});
