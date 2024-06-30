import { fileURLToPath, URL } from 'node:url'
import ImportMetaEnvPlugin from '@import-meta-env/unplugin'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: true
  },
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    ImportMetaEnvPlugin.vite({
      example: '.env.example'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
