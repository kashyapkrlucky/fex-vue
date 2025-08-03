<template>
  <div class="h-full flex flex-row items-center justify-center">
    <div class="w-lg bg-white p-6 rounded-lg shadow-sm">
      <!-- Title Section -->
      <div class="flex flex-column gap-4 mb-6">
        <h2 class="text-2xl font-semibold text-gray-600">{{ $t('auth.createAccount') }}</h2>
        <div class="flex flex-row gap-1">
          <span class="text-gray-400">{{ $t('auth.alreadyHaveAccount') }}</span>
          <RouterLink to="/sign-in" class="text-primary">{{ $t('auth.signIn') }}</RouterLink>
        </div>
      </div>

      <!-- Sign Up Form -->
      <form @submit.prevent="onSignUp" class="flex flex-column gap-4">

        <!-- Name Input -->
        <Input label="Name" id="name" type="text" placeholder="Enter your name" v-model="name" @input="clearError"
          required data-testid="name-input" />

        <!-- Email Input -->
        <Input label="Email Address" id="email" type="email" placeholder="Enter your email" v-model="email"
          @input="clearError" required data-testid="email-input" />

        <!-- Password Input with Toggle -->
        <div class="relative">
          <Input label="Password" :type="showPassword ? 'text' : 'password'" id="password"
            placeholder="Enter your password" v-model="password" @input="clearError" required
            data-testid="password-input" />
          <p @click="showPassword = !showPassword" aria-label="Toggle password visibility"
            class="absolute top-10 right-2 flex items-center text-gray-500 bg-white border-0">
            <EyeOffIcon v-if="showPassword" :size="20" />
            <EyeIcon v-else :size="20" />
          </p>
        </div>

        <!-- Confirm Password Input with Toggle -->

        <div class="relative">
          <Input label="Confirm Password" :type="showConfirmPassword ? 'text' : 'password'" id="confirmPassword"
            placeholder="Confirm your password" v-model="confirmPassword" @input="clearError" required
            data-testid="confirm-password-input" class="mt-1" />
          <p @click="showConfirmPassword = !showConfirmPassword" aria-label="Toggle confirm password visibility"
            class="absolute top-10 right-2 flex items-center text-gray-500 bg-white border-0">
            <EyeOffIcon v-if="showConfirmPassword" :size="20" />
            <EyeIcon v-else :size="20" />
          </p>
        </div>

        <!-- Sign Up Button -->
        <Button variant="primary" type="submit" :disabled="loadingStore?.loading" :loading="loadingStore?.loading"
          class="w-full" data-testid="sign-up-button">
          <template #default>
            <span v-if="loadingStore?.loading">Signing up...</span>
            <span v-else>{{ $t('auth.create') }}</span>
          </template>
        </Button>

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
import { useAlertStore } from '@/stores/alert.store'
import { useRouter } from 'vue-router'
import { EyeIcon, EyeOffIcon } from 'lucide-vue-next'
import { Button, Input } from 'nexora-ui-vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const signUpError = ref(false)
const errorMessage = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const userStore = useUserStore()
const loadingStore = useLoadingStore()
const alertStore = useAlertStore();
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
    alertStore.addAlert('Please enter a valid email address.', 'error', 4000)
    return
  }

  if (password.value.length < 6) {
    alertStore.addAlert('Password length must be at-least 6 characters', 'error', 4000)
    return
  }

  if (password.value !== confirmPassword.value) {
    alertStore.addAlert('Passwords do not match.', 'error', 4000)
    return
  }

  try {
    loadingStore.show()
    await userStore.signUp(name.value, email.value, password.value)
    router.push('/')
  } catch (e) {
    if (e) alertStore.addAlert('Sign Up failed. Please try again.', 'error', 4000)
  } finally {
    loadingStore.hide();
  }
}
</script>
