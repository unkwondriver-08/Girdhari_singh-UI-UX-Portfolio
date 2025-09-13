import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Girdhari_singh-UI-UX-Portfolio/", // 👈 GitHub Pages base path
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // 👈 Removed lovable-tagger
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
