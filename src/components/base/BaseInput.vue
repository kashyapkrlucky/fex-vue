<script setup lang="ts">
defineProps<{
  modelValue: string
  label?: string
  type?: string
  placeholder?: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>
    <input :type="type || 'text'" :placeholder="placeholder" :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      class="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>
