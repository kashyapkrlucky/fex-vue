<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}>()
</script>

<template>
  <button :type="type || 'button'" :class="[
    'px-4 py-2 rounded font-semibold transition cursor-pointer',
    variant === 'primary' && 'bg-primary text-white hover:bg-primary-hover',
    variant === 'secondary' && 'bg-gray-200 text-black hover:bg-gray-300',
    variant === 'danger' && 'bg-red-500 text-white hover:bg-red-600',
    disabled && 'opacity-50 cursor-not-allowed'
  ]" :disabled="disabled">
    <slot />
  </button>
</template>
