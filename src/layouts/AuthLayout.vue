<template>
  <div class="flex flex-column h-screen bg-gray-50 text-gray-900 overflow-hidden">
    <header class="flex items-center justify-between px-4 border-b border-gray-200 bg-white h-16 shadow-md">
      <h2 class="font-bold">AppName</h2>
      <LanguageSwitcher></LanguageSwitcher>
    </header>
    <main class="flex-1 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>
<script lang="ts" setup>
import LanguageSwitcher from "@/components/base/LanguageSwitcher.vue";
</script>
<style>
select {
  width: auto;
}
</style>