import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/jetsetgo_vite_v1/",
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
