import nitrogql from "@nitrogql/rollup-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "${__dirname}/src",
    },
  },
  plugins: [
    react(),
    nitrogql({
      configFile: "./graphql.config.yaml",
      include: ["**/*.graphql"],
    }),
  ],
});
