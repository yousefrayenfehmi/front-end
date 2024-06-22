import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_REACT_API_URL': JSON.stringify(process.env.VITE_REACT_API_URL),
    'process.env.VITE_SCRIPT_SRC': JSON.stringify(process.env.VITE_SCRIPT_SRC),
    'process.env.VITE_SCRIPT_DATA_URL': JSON.stringify(process.env.VITE_SCRIPT_DATA_URL),
    'process.env.VITE_SCRIPT_DATA_URL1': JSON.stringify(process.env.VITE_SCRIPT_DATA_URL1),

    // Make sure all environment variable keys follow the valid identifier rules
  }
});
