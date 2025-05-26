<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('update:modelValue', false)
}

onMounted(() => document.addEventListener('keydown', handleEscape))
onUnmounted(() => document.removeEventListener('keydown', handleEscape))
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        @click.self="emit('update:modelValue', false)">
        <div class="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md shadow-xl">
          <slot />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
