<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseSpinner from './components/base/BaseSpinner.vue';
import GlobalAlert from '@/components/base/AlertView.vue'
</script>

<template>
  <RouterView />
  <BaseSpinner />
  <GlobalAlert />
</template>
