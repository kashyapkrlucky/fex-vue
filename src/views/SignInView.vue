<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Sign In</h1>
    <form class="space-y-4">
      <div>
        <label class="block mb-1 text-sm">Email</label>
        <input
          type="email"
          class="w-full border border-gray-300 rounded p-2"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label class="block mb-1 text-sm">Password</label>
        <input
          type="password"
          class="w-full border border-gray-300 rounded p-2"
          placeholder="••••••••"
        />
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Sign In
      </button>
    </form>
  </div>
</template>
