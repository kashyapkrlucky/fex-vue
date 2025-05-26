<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
import PageWrapper from '@/components/layout/PageWrapper.vue'
</script>

<template>
  <AppLayout>
    <PageWrapper>
      <router-view />
    </PageWrapper>
  </AppLayout>
</template>
