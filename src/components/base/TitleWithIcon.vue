<template>
  <div class="flex items-center gap-2 text-gray-800">
    <component :is="icon" class="w-5 h-5 text-primary" />
    <h2 class="text-lg font-semibold">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string
  icon: Component
}>()
</script>
