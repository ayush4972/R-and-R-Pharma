import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// During development, proxy API calls to the Express backend so the
// frontend can POST to /api/contact without CORS/host concerns.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
      },
    },
  },
});
