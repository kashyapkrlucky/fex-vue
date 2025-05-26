<template>
  <div class="p-6 flex flex-col gap-6">

    <BaseCard>
      <h2 class="text-lg font-semibold">Welcome</h2>
      <p>This is a base card component.</p>
    </BaseCard>


    <button @click="showModal = true">Open Modal</button>
    <BaseModal v-model="showModal">
      <h2 class="text-xl font-bold mb-2">Modal Title</h2>
      <p>This is modal content.</p>
      <button @click="showModal = false" class="mt-4">Close</button>
    </BaseModal>

    <BaseInput v-model="name" id="name" label="Your Name" placeholder="Enter your name" />

    <BaseTextarea v-model="message" id="message" label="Message" placeholder="Write your message..." />

    <BaseSelect v-model="selected" id="role" label="Role" :options="options" placeholder="Select a role" />

    <BaseCheckbox v-model="termsAccepted" id="termsAccepted" label="I agree to the terms and conditions" />

    <BaseToggle v-model="darkMode" label="Toggle" />

    <div class="flex flex-row gap-4">
      <BaseButton @click="handleClick" variant="primary">Primary</BaseButton>
      <BaseButton variant="secondary">Secondary</BaseButton>
      <BaseButton variant="danger">Danger</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/components/base/BaseCard.vue';
import BaseModal from '@/components/base/BaseModal.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseTextarea from '@/components/base/BaseTextarea.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import BaseCheckbox from '@/components/base/BaseCheckbox.vue';
import BaseToggle from '@/components/base/BaseToggle.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { useLoadingStore } from '@/stores/loading.store';


const name = ref('')
const message = ref('')
const showModal = ref(false)
const selected = ref('')
const darkMode = ref(false)
const options = [
  { label: 'Frontend Developer', value: 'frontend' },
  { label: 'Backend Developer', value: 'backend' },
  { label: 'Full-Stack Developer', value: 'fullstack' }
]
const termsAccepted = ref(false)
const loading = useLoadingStore()

const handleClick = () => {
  loading.show()

  setTimeout(() => {
    loading.hide()
  }, 3000)
}
</script>
