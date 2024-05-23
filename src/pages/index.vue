<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div ref="target" class="w-40 h-40 bg-gray-300">
      X: {{ x }} Y: {{ y }} isOutside: {{ isOutside }}
    </div>
    <el-button>Button</el-button>
    <!-- A basic anchor icon from Phosphor icons -->
    <div class="i-ph:airplane-fill w-12 h-12"></div>
    <!-- An orange alarm from Material Design Icons -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- A large Vue logo -->
    <div class="i-logos-vue text-3xl" />
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- Twemoji of laugh, turns to tear on hovering -->
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    pwa register 测试
    <ReloadPrompt></ReloadPrompt>
  </div>
</template>

<script setup lang="ts">
import ReloadPrompt from '@/components/ReloadPrompt.vue'
import { registerSW } from 'virtual:pwa-register'

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)

onMounted(() => {
  registerSW({
    immediate: true,
    // onNeedRefresh: () => {
    //   console.log('SW need refresh')
    // },
    onRegisteredSW: (url, registration) => {
      console.log('SW registered: ', registration)
      setInterval(() => {
        registration && registration.update()
      }, 3000)
    }
  })
})
</script>

<style scoped></style>
<router lang="yaml">
meta:
  layout: default
</router>
