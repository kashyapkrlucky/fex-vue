<template>
  <div class="fixed bottom-20 z-50 space-y-2 w-full">
    <TransitionGroup name="fade" tag="div">
      <div v-for="alert in alertStore.alerts" :key="alert.id" :class="[
        'm-auto flex items-start gap-3 px-4 py-3 rounded-lg shadow-md cursor-pointer max-w-sm',
        alert.type === 'error' ? 'text-red-700 bg-red-100' :
          alert.type === 'success' ? 'text-green-700 bg-green-100' :
            alert.type === 'warning' ? 'text-yellow-700 bg-yellow-100' :
              'text-blue-600 bg-blue-100'
      ]" @click="alertStore.removeAlert(alert.id)">
        <component :is="getIcon(alert.type)" class="w-5 h-5 mt-0.5 shrink-0" />
        <span class="flex-1">{{ alert.message }}</span>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useAlertStore } from '@/stores/alert.store'
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-vue-next'

const alertStore = useAlertStore()

const getIcon = (type: string) => {
  switch (type) {
    case 'error': return AlertCircle
    case 'success': return CheckCircle
    case 'warning': return AlertTriangle
    default: return Info
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
