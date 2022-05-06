import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import path from 'path'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    Unocss({
      configFile: path.resolve(__dirname, 'uno.config.ts'),
    }),
    vue(),
    Components({
      dirs: ['src/components'],
    }),
    Pages()
  ]
})