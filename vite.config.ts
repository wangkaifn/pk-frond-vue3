import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 自动路由基于文件系统
import VueRouter from 'unplugin-vue-router/vite'

// uno css
import UnoCSS from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'

// 如果使用了AutoImport vue-router 需要从 VueRouterAutoImports引入
import { VueRouterAutoImports } from 'unplugin-vue-router'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),

    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        VueRouterAutoImports,
        '@vueuse/core'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
