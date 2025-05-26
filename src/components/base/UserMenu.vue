<template>
  <div class="relative select-none text-gray-600 hover:text-primary cursor-pointer" ref="menuContainer">
    <!-- Avatar Trigger -->

    <UserAvatar :user="userStore?.user" size="md" @click="toggleMenu" />


    <!-- Dropdown -->
    <div v-if="isMenuOn" ref="dropdownRef"
      class="absolute top-8 right-1 mt-2 z-12 w-64 rounded-lg shadow-xl bg-white border border-gray-200">
      <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
        <UserIcon class="w-5 h-5 text-gray-500" />
        <div class="text-sm font-medium text-gray-800">{{ userStore?.user?.name }}</div>
      </div>

      <RouterLink to="/settings" class="px-4 py-3 flex items-center gap-2 hover:bg-gray-50 text-sm text-gray-700">
        <SettingsIcon class="w-5 h-5" />
        Settings
      </RouterLink>

      <button @click="logout"
        class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-t border-gray-100">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { UserIcon, SettingsIcon } from 'lucide-vue-next';
import UserAvatar from '@/components/base/UserAvatar.vue';
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();
const router = useRouter();

const isMenuOn = ref(false);
const menuContainer = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isMenuOn.value = !isMenuOn.value;
};

const logout = async () => {
  userStore.logout();
  router.push('/sign-in');
};

// ✅ Handle clicks outside to close menu
const handleClickOutside = (event: MouseEvent) => {
  if (
    menuContainer.value &&
    !menuContainer.value.contains(event.target as Node)
  ) {
    isMenuOn.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
