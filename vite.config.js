import { defineConfig } from "vite";

export default defineConfig({
  base: "/modern-art-gallery/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
