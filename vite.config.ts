import { defineConfig } from "vite";
// import { analyzer } from "vite-bundle-analyzer";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
    // analyzer({ analyzerPort: 8000 }),
  ],
});
