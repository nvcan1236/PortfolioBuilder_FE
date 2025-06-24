<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="handleLogin"
  >
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" class="w-full" />
    </UFormField>

    <UFormField label="Password" name="password">
      <div class="relative">
        <UInput
          v-model="state.password"
          :type="showPassword ? 'text' : 'password'"
          class="w-full"
        >
          <template #trailing>
            <UButton
              variant="link"
              @click="showPassword = !showPassword"
              :icon="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
            />
          </template>
        </UInput>
      </div>
    </UFormField>

    <UFormField label="Password Confirmation" name="password">
      <div class="relative">
        <UInput
          v-model="state.password"
          :type="showPassword ? 'text' : 'password'"
          class="w-full"
        >
          <template #trailing>
            <UButton
              variant="link"
              @click="showPassword = !showPassword"
              :icon="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
            />
          </template>
        </UInput>
      </div>
    </UFormField>
    <UButton type="submit" class="w-full justify-center"> Create Account </UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;
const showPassword = ref(false);

const state = reactive<Partial<Schema>>({
  email: "someone@email.com",
  password: "somepassword",
});

const toast = useToast();
const { login } = useAuthStore();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}

const handleLogin = () => {
  login("", "");
  navigateTo("/");
};
</script>
