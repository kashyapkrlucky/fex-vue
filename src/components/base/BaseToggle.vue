<script setup lang="ts">
defineProps<{
  modelValue: boolean
  label?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex items-center space-x-3">
    <span v-if="label" class="text-sm text-gray-700 dark:text-gray-300">{{ label }}</span>
    <button @click="emit('update:modelValue', !modelValue)" :class="[
      'relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none',
      modelValue ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
    ]">
      <span :class="[
        'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform',
        modelValue ? 'translate-x-5' : 'translate-x-0'
      ]" />
    </button>
  </div>
</template>
