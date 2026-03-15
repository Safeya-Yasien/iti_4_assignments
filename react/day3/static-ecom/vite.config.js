import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "@/components": new URL("./src/components", import.meta.url).pathname,
      "@/pages": new URL("./src/pages", import.meta.url).pathname,
      "@/services": new URL("./src/services", import.meta.url).pathname,
      "@/utils": new URL("./src/utils", import.meta.url).pathname,
      "@/layouts": new URL("./src/layouts", import.meta.url).pathname,
    },
  },
});
