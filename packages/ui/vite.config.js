import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({ plugins: [tailwindcss(), svelte()],optimizeDeps: {
    include: ['bits-ui'] // Buộc Vite pre-bundle package này
  },
  ssr: {
    noExternal: ['bits-ui'] // Biên dịch package này cho SSR
  }, });
