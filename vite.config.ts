import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./src/manifest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({
      manifest,
    }),
  ],
  server: {
    host: "localhost",
    port: 3000,
  },
});
