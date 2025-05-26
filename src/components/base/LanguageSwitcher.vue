<template>
  <select v-model="locale" name="languageSwitch" @change="changeLang"
    class="border border-gray-300 rounded p-1 text-xs">
    <option value="en">English</option>
    <option value="de">Deutsch</option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const changeLang = () => {
  localStorage.setItem('lang', locale.value)
  // window.location.reload()
}
</script>
