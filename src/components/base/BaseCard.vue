<script setup lang="ts">
defineProps<{
  noPadding?: boolean
  noShadow?: boolean
}>()
</script>

<template>
  <div :class="[
    'rounded-xl bg-white dark:bg-gray-800',
    noPadding ? '' : 'p-4',
    noShadow ? '' : 'shadow-md'
  ]">
    <slot />
  </div>
</template>
