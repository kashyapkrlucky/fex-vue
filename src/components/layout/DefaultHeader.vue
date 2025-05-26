<template>
  <header
    class="flex items-center justify-between h-14 px-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
    <h1 class="text-lg font-semibold">App Name</h1>
    <div class="flex items-center space-x-4">
      <LanguageSwitcher></LanguageSwitcher>
      <UserMenu></UserMenu>
    </div>
  </header>
</template>
<script lang="ts" setup>
import UserMenu from "@/components/base/UserMenu.vue";
import LanguageSwitcher from "@/components/base/LanguageSwitcher.vue";
</script>
