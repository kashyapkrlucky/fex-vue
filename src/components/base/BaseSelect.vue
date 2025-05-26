<script setup lang="ts">
defineProps<{
  modelValue: string | number
  label?: string
  options: { label: string; value: string | number }[]
  error?: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>
    <select :value="modelValue" @change="emit('update:modelValue', $event.target.value)"
      class="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary">
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>
