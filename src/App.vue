<template>
  <RouterView />
  <Spinner v-if="loading" :fullscreen="true" />
  <GlobalAlert />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import GlobalAlert from '@/components/base/AlertView.vue'
import { Spinner } from 'nexora-ui-vue';
import { useLoadingStore } from './stores/loading.store';
import { storeToRefs } from 'pinia';
const loadingStore = useLoadingStore()
const { loading } = storeToRefs(loadingStore);
</script>
