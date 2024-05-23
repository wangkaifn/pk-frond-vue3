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

// 布局
import Layouts from 'vite-plugin-vue-layouts'

import { VitePWA } from 'vite-plugin-pwa'

// mock
import { viteMockServe } from 'vite-plugin-mock'

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
    }),
    Layouts({
      // 路径
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA({
      // registerType: 'autoUpdate' // PWA 注册类型。autoUpdate 意味着 service worker 会自动检查和更新新的内容。
      manifest: {
        // PWA 清单文件
        name: 'My Awesome Vue App', // 应用名称
        short_name: 'VueApp', // 短名称
        description: 'My Awesome Vue App', // 应用描述
        theme_color: '#42b983', // 主题颜色
        icons: [
          // 图标设置
          {
            src: '192x192.png', // 图标路径
            sizes: '192x192', // 图标大小
            type: 'image/png' // 图标类型
          },
          {
            src: '512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // 图标用途
          }
        ]
      }
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
