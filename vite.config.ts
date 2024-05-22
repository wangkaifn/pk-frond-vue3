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

// 自动导入组件在页面中不需要import 去导入
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
    }),
    Components({
      /* options */
      // 允许子目录作为组件的命名空间前缀
      directoryAsNamespace: true,
      // 省略相同的前缀
      collapseSamePrefixes: true,
      // 集成使用 element-plus(安装该组件在进行相应的配置) 其他组件库相同用法
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
