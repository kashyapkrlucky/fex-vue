<template>
  <div class="min-h-screen w-full flex flex-col">
    <header class="flex flex-row justify-between p-4 bg-white border-b border-gray-200">
      <h2 class="font-bold">AppName</h2>
      <LanguageSwitcher></LanguageSwitcher>
    </header>
    <div class="w-full flex-1 flex justify-center items-center bg-gray-50">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
import LanguageSwitcher from "@/components/base/LanguageSwitcher.vue";
</script>