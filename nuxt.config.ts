// https://nuxt.com/docs/api/configuration/nuxt-config
import * as path from "node:path";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],

  vite: {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'app/components/MyButton.ce.ts'),
        formats: ['iife'],
        name: 'MyButton',
        fileName: () => 'my-button.js',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          inlineDynamicImports: true,
          globals: {
            vue: 'Vue'
          }
        },
      },
    },
  },
})
