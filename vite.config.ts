import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite"; // 通过该插件，可以在setup语法中命名组件name
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      "@dkt-plus": resolve(__dirname, "packages"),
    },
    extensions: [".js", ".json", ".ts"],
  },
});
