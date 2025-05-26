<template>
  <div class="w-full flex flex-row justify-center">
    <div class="w-[86vw] m-auto max-w-md">
      <!-- Title Section -->
      <div class="flex flex-col gap-4 mb-6">
        <!-- <h2 class="text-2xl font-semibold text-gray-600">Welcome Back</h2> -->
        <h2 class="text-2xl font-semibold text-gray-600">{{ $t('auth.welcome') }}</h2>
        <div class="flex flex-row gap-1">
          <span class="text-gray-400">{{ $t('auth.noAccount') }}</span>
          <RouterLink to="/sign-up" class="text-primary">{{ $t('auth.signUp') }}</RouterLink>
        </div>
      </div>

      <!-- Sign In Form -->
      <form @submit.prevent="onSignIn" class="flex flex-col gap-4">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <BaseInput id="email" type="email" placeholder="Enter your email" v-model="email" @input="clearError" required
            data-testid="email-input" class="mt-1" />
        </div>

        <!-- Password Input with Toggle -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="relative">
            <BaseInput :type="showPassword ? 'text' : 'password'" id="password" placeholder="Enter your password"
              v-model="password" @input="clearError" required data-testid="password-input" class="mt-1 " />
            <button type="button" @click="showPassword = !showPassword" aria-label="Toggle password visibility"
              class="absolute inset-y-0 right-2 flex items-center text-gray-500">
              <EyeOffIcon v-if="showPassword" :size="20" />
              <EyeIcon v-else :size="20" />
            </button>
          </div>
        </div>

        <!-- Sign In Button -->
        <BaseButton type="submit" :disabled="loadingStore?.loading" :loading="loadingStore?.loading" class="w-full"
          data-testid="sign-in-button" variant="primary">
          <template #default>
            <span v-if="loadingStore?.loading">Logging in...</span>
            <span v-else>{{ $t('auth.enter') }}</span>
          </template>
        </BaseButton>

        <!-- Error Message -->
        <div v-if="signInError" class="text-red-600 text-center text-sm" data-testid="login-error">
          Sign In failed. Please check your credentials.
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.store'
import { useLoadingStore } from '@/stores/loading.store'
import { useRouter } from 'vue-router'
import { EyeIcon, EyeOffIcon } from 'lucide-vue-next'

// Base components (update the path if needed)
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useAlertStore } from '@/stores/alert.store'

const email = ref('')
const password = ref('')
const signInError = ref(false)
const showPassword = ref(false)
const alertStore = useAlertStore();


const userStore = useUserStore()
const loadingStore = useLoadingStore()
const router = useRouter()

const clearError = () => {
  signInError.value = false
}

const isValidEmail = (emailStr: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)

const onSignIn = async () => {
  signInError.value = false

  if (!isValidEmail(email.value)) {
    alertStore.addAlert('Please enter a valid email address.', 'error', 4000)
    return
  }

  if (password.value.length < 3) {
    alertStore.addAlert('Password length must be at-least 6 characters', 'error', 4000)
    return
  }

  try {
    loadingStore.show();
    await userStore.signIn(email.value, password.value)
    router.push('/')
  } catch (e) {
    if (e) alertStore.addAlert('Something went wrong!!!', 'error', 4000)
  } finally {
    loadingStore.hide();
  }
}
</script>
