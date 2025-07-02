<template>
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <header
      class="flex items-center justify-between h-14 px-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <h1 class="text-lg font-semibold">App Name</h1>
      <div class="flex items-center space-x-4">
        <LanguageSwitcher></LanguageSwitcher>
        <UserMenu></UserMenu>
      </div>
    </header>
    <div class="flex flex-row flex-1">
      <aside
        class="transition-colors duration-300 w-64 hidden md:block bg-white dark:bg-gray-900 text-black dark:text-white border-r border-gray-200 dark:border-gray-700">
        <nav class="p-4 space-y-2">
          <RouterLink to="/" class="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            active-class="bg-gray-100 dark:bg-gray-700 font-medium">
            {{ $t('nav.home') }}
          </RouterLink>
          <RouterLink to="/about" class="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            active-class="bg-gray-100 dark:bg-gray-700 font-medium">
            {{ $t('nav.about') }}
          </RouterLink>
        </nav>
      </aside>
      <main class="flex-1 overflow-y-auto p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import UserMenu from "@/components/base/UserMenu.vue";
import LanguageSwitcher from "@/components/base/LanguageSwitcher.vue";
</script>
