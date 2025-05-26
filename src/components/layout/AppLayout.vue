<template>
  <div class="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <DefaultSidebar />
    <div class="flex flex-col flex-1">
      <DefaultHeader />
      <main class="flex-1 overflow-y-auto p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultSidebar from './DefaultSidebar.vue'
import DefaultHeader from './DefaultHeader.vue'
</script>
