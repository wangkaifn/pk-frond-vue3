<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello Home!</h1>

    <ReloadPrompt></ReloadPrompt>
  </div>
</template>

<script setup lang="ts">
import ReloadPrompt from '@/components/ReloadPrompt.vue'
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,

    onRegisteredSW: (url, registration) => {
      console.log('SW registered: ', registration)
      setInterval(() => {
        registration && registration.update()
      }, 360000)
    }
  })
})
</script>

<style scoped></style>
<route lang="yaml">
meta:
  layout: default
</route>
