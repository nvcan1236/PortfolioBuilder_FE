<template>
  <UModal>
    <UButton :label="label || 'Login'" />
    <template #title>
      <h2 class="text-lg font-semibold">
        {{
          authType === "login"
            ? "Login"
            : authType === "register"
            ? "Register"
            : "Forgot Password"
        }}
      </h2>
    </template>
    <template #description>
      <p class="text-sm text-gray-500">
        {{
          authType === "login"
            ? "And start the building your portfolio"
            : authType === "register"
            ? "To get started building your portfolio now"
            : "Enter your email to reset your password"
        }}
      </p>
    </template>

    <template #body>
      <div>
        <LoginForm v-if="authType === 'login'" />
        <RegisterForm v-if="authType === 'register'" />
        <ForgotPasswordForm v-if="authType === 'forgot-password'" />
      </div>
    </template>

    <template #footer>
      <div class="flex justify-center w-full">
        <UButton
          variant="link"
          @click="setAuthType('login')"
          v-if="authType === 'register' || authType === 'forgot-password'"
        >
          Already have an account? Login
        </UButton>
        <div v-if="authType === 'login'" class="flex flex-col items-center">
          <UButton
            variant="link"
            color="neutral"
            class="min-h-0"
            @click="setAuthType('forgot-password')"
          >
            Forgot password?
          </UButton>
          <UButton variant="link" @click="setAuthType('register')">
            Don't have an account? Register
          </UButton>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
type AuthModalProps = {
  label?: string;
};

const authStore = useAuthStore();
const { setAuthType } = authStore;
const authType = computed(() => authStore.authType);

const { label = "Login" } = defineProps<AuthModalProps>();
</script>
