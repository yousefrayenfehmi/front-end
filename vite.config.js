import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_REACT_API_URL': JSON.stringify(process.env.VITE_REACT_API_URL),
    'process.env.VITE_script_src': JSON.stringify(process.env.VITE_script_src),
    'process.env.VITE_script_data-url': JSON.stringify(process.env.VITE_script_data_url), // Correction de la clé ici
  }
});
