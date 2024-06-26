
// vite.config.js 或 vite.config.ts
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({
    server: {
        port: 3000, // 修改为你想要的端口号
    },
    plugins: [vue(), vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
    })],
    // 添加库模式配置

    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "SmartyUI",
            fileName: "smarty-ui",
            // 导出模块格式
            formats: ["esm", "umd", "iife"],
        },
    },
});