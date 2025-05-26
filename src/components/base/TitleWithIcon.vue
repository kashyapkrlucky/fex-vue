<template>
  <div class="flex items-center gap-2 text-gray-800">
    <slot name="icon" />
    <span class="text-xs lg:text-sm uppercase font-semibold">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String
})
</script>