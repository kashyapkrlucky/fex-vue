<script setup lang="ts">
defineProps<{
  id: string
  modelValue: string
  label?: string
  placeholder?: string
  rows?: number
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>
    <textarea :id=id :rows="rows || 4" :placeholder="placeholder" :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-gray-50 focus:ring-2 focus:ring-primary"
      :aria-invalid="!!error" :aria-describedby="error ? id + '-error' : undefined" />
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>
