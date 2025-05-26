<template>
  <div class="w-full flex flex-row justify-center">
    <div class="w-[86vw] m-auto max-w-md">
      <!-- Title Section -->
      <div class="flex flex-col gap-4 mb-6">
        <h2 class="text-2xl font-semibold text-gray-600">{{ $t('auth.createAccount') }}</h2>
        <div class="flex flex-row gap-1">
          <span class="text-gray-400">{{ $t('auth.alreadyHaveAccount') }}</span>
          <RouterLink to="/sign-in" class="text-primary">{{ $t('auth.signIn') }}</RouterLink>
        </div>
      </div>

      <!-- Sign Up Form -->
      <form @submit.prevent="onSignUp" class="flex flex-col gap-4">
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
              v-model="password" @input="clearError" required data-testid="password-input" class="mt-1" />
            <button type="button" @click="showPassword = !showPassword" aria-label="Toggle password visibility"
              class="absolute inset-y-0 right-2 flex items-center text-gray-500">
              <EyeOffIcon v-if="showPassword" size="20" />
              <EyeIcon v-else size="20" />
            </button>
          </div>
        </div>

        <!-- Confirm Password Input with Toggle -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <div class="relative">
            <BaseInput :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword"
              placeholder="Confirm your password" v-model="confirmPassword" @input="clearError" required
              data-testid="confirm-password-input" class="mt-1" />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword"
              aria-label="Toggle confirm password visibility"
              class="absolute inset-y-0 right-2 flex items-center text-gray-500">
              <EyeOffIcon v-if="showConfirmPassword" size="20" />
              <EyeIcon v-else size="20" />
            </button>
          </div>
        </div>

        <!-- Sign Up Button -->
        <BaseButton type="submit" :disabled="loadingStore?.loading" :loading="loadingStore?.loading" class="w-full"
          data-testid="sign-up-button" variant="primary">
          <template #default>
            <span v-if="loadingStore?.loading">Signing up...</span>
            <span v-else>{{ $t('auth.create') }}</span>
          </template>
        </BaseButton>

        <!-- Error Message -->
        <div v-if="signUpError" class="text-red-600 text-center text-sm" data-testid="signup-error">
          {{ errorMessage }}
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

import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const signUpError = ref(false)
const errorMessage = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const userStore = useUserStore()
const loadingStore = useLoadingStore()
const router = useRouter()

const clearError = () => {
  signUpError.value = false
  errorMessage.value = ''
}

const isValidEmail = (emailStr: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)

const onSignUp = async () => {
  clearError()

  if (!isValidEmail(email.value)) {
    signUpError.value = true
    errorMessage.value = 'Please enter a valid email address.'
    return
  }

  if (password.value.length < 6) {
    signUpError.value = true
    errorMessage.value = 'Password must be at least 6 characters.'
    return
  }

  if (password.value !== confirmPassword.value) {
    signUpError.value = true
    errorMessage.value = 'Passwords do not match.'
    return
  }

  try {
    loadingStore.setLoading(true)
    await userStore.signUp(email.value, password.value)
    router.push('/')
  } catch (e) {
    signUpError.value = true
    errorMessage.value = e?.message || 'Sign Up failed. Please try again.'
  } finally {
    loadingStore.setLoading(false)
  }
}
</script>
