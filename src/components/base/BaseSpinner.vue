<!-- components/base/BaseSpinner.vue -->
<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
</template>

<script setup lang="ts">
import { useLoadingStore } from '@/stores/loading'
import { storeToRefs } from 'pinia'

const loadingStore = useLoadingStore()
const { loading: visible } = storeToRefs(loadingStore)
</script>
