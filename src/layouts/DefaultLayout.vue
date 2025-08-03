<template>
  <div class="flex flex-column h-screen bg-gray-50 text-gray-900 overflow-hidden">
    <header class="flex items-center justify-between px-4 border-b border-gray-200 bg-white h-16 shadow-sm">
      <h1 class="text-lg font-semibold">Frontend X</h1>
      <div class="flex items-center space-x-4">
        <LanguageSwitcher></LanguageSwitcher>
        <UserMenu></UserMenu>
      </div>
    </header>
    <main class="flex-1 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>
<script setup lang="ts">
import UserMenu from "@/components/base/UserMenu.vue";
import LanguageSwitcher from "@/components/base/LanguageSwitcher.vue";
</script>
