<template>
  <aside
    class="transition-colors duration-300 w-64 hidden md:block bg-white dark:bg-gray-900 text-black dark:text-white border-r border-gray-200 dark:border-gray-700 min-h-screen">
    <nav class="p-4 space-y-2">
      <RouterLink to="/" class="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        active-class="bg-gray-100 dark:bg-gray-700 font-medium">
        Home
      </RouterLink>
      <RouterLink to="/about" class="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        active-class="bg-gray-100 dark:bg-gray-700 font-medium">
        About
      </RouterLink>
    </nav>

  </aside>
</template>
