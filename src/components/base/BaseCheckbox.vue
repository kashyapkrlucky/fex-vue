<script setup lang="ts">
defineProps<{
  modelValue: boolean
  label?: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-1">
    <label class="inline-flex items-center space-x-2 cursor-pointer">
      <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" :checked="modelValue"
        @change="emit('update:modelValue', $event.target.checked)" />
      <span class="text-sm text-gray-700 dark:text-gray-300" v-if="label">{{ label }}</span>
    </label>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>
