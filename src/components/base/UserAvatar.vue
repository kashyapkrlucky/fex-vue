<template>
  <div v-if="user?.name" :class="[
    'flex items-center justify-center bg-white border border-2 border-gray-400 shadow-md rounded-full text-gray-500 uppercase select-none',
    sizeClass
  ]">
    <img v-if="user?.avatar" :src="user?.avatar" class="object-cover w-full h-full rounded-full m-1"
      alt="User Avatar" />
    <span
      class="m-auto border border-gray-100 border-2 bg-gray-100 text-gray-400 font-bold w-full h-full flex flex-col justify-center items-center rounded-full"
      v-else>{{
        user?.name?.[0]?.toUpperCase()
      }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { User } from '@/types'

const props = defineProps<{
  user: User | null
  size?: 'sm' | 'md' | 'lg' | 'xl'
}>()

const sizeClass = computed(() => {
  const sizeMap: Record<'sm' | 'md' | 'lg' | 'xl', string> = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
    xl: 'w-12 h-12 text-lg'
  }

  return sizeMap[props.size || 'md']
})
</script>
