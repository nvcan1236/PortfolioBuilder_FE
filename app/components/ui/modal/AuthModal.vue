<template>
  <UModal @close="setAuthType('login')">
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
          authType === "login" ? "And start the building your portfolio" : ""
        }}

        {{
          authType === "register"
            ? "To get started building your portfolio now"
            : ""
        }}

        {{
          authType === "verify-forgot-password"
            ? "Enter your email to reset your password"
            : ""
        }}

        {{
          authType === "reset-password"
            ? "Enter the code sent to your email"
            : ""
        }}
      </p>
    </template>

    <template #body>
      <div>
        <LoginForm v-if="authType === 'login'" />
        <RegisterForm v-if="authType === 'register'" />
        <VerifyForgotPasswordForm
          v-if="authType === 'verify-forgot-password'"
        />
        <ResetPasswordForm v-if="authType === 'reset-password'" />
      </div>
    </template>

    <template #footer>
      <div class="flex justify-center w-full">
        <UButton
          variant="link"
          @click="setAuthType('login')"
          v-if="
            authType === 'register' || authType === 'verify-forgot-password'
          "
        >
          Already have an account? Login
        </UButton>

        <div v-if="authType === 'login'" class="flex flex-col items-center">
          <UButton
            variant="link"
            color="neutral"
            class="min-h-0"
            @click="setAuthType('verify-forgot-password')"
          >
            Forgot password?
          </UButton>
          <UButton variant="link" @click="setAuthType('register')">
            Don't have an account? Register
          </UButton>
        </div>

        <div
          v-if="authType === 'reset-password'"
          class="flex flex-col items-center"
        >
          <UButton variant="link" color="neutral">Can't receive code?</UButton>
          <UButton variant="link" @click="setAuthType('login')">
            Back to Login
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
