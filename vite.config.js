import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
import fs from "fs";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync("/etc/ssl/localhost-key.pem"),
      cert: fs.readFileSync("/etc/ssl/localhost.pem"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
