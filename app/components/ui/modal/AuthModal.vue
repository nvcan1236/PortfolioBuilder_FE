<template>
  <UModal>
    <UButton :label="label || 'Login'" />

    <template #content>
      <div class="py-8">
        <UCard
          class="w-full max-w-md bg-white border-none mx-auto"
          variant="soft"
        >
          <template #header>
            <div class="text-center">
              <h3 class="text-2xl font-bold">
                {{
                  authType === "login"
                    ? "Login"
                    : authType === "register"
                    ? "Register"
                    : "Forgot Password"
                }}
              </h3>
              <p class="text-sm text-gray-500 mt-2">
                {{
                  authType === "login"
                    ? "And start the building your portfolio"
                    : authType === "register"
                    ? "To get started building your portfolio now"
                    : "Enter your email to reset your password"
                }}
              </p>
            </div>
          </template>
          <LoginForm v-if="authType === 'login'" />
          <RegisterForm v-if="authType === 'register'" />
          <ForgotPasswordForm v-if="authType === 'forgot-password'" />

          <div class="flex justify-center mt-4">
            <UButton
              variant="link"
              @click="setAuthType('login')"
              v-if="authType === 'register' || authType === 'forgot-password'"
            >
              Already have an account? Login
            </UButton>
            <UButton
              variant="link"
              @click="setAuthType('register')"
              v-if="authType === 'login'"
            >
              Don't have an account? Register
            </UButton>
          </div>
        </UCard>
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
