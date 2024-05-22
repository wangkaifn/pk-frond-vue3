<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div ref="target" class="w-40 h-40 bg-gray-300">
      X: {{ x }} Y: {{ y }} isOutside: {{ isOutside }}
    </div>
    <el-button>Button</el-button>
    <i-carbon-accessibility />
    <i-mdi-account-box style="font-size: 2em; color: red" />
  </div>
</template>

<script setup lang="ts">
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
