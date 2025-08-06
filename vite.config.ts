import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: './postcss.config.cjs'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'app/components/MyButton.ce.ts'),
      name: 'MyButton',
      fileName: 'my-button'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app')
    }
  }
}) 