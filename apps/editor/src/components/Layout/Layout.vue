<script setup lang="ts">
</script>

<template>
  <div flex
       flex-col
       h-full>
    <div h-15>
      <header-bar></header-bar>
    </div>
    <div class="s-layout-content"
         flex-1>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>

