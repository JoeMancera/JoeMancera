import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig(
  {
    // Astro deploy in GH Pages: https://docs.astro.build/es/guides/deploy/github/
    site: 'https://JoeMancera.github.io',
    vite: {
      plugins: [tailwindcss()],
    },
  },
);
