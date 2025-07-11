<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput
        v-model="state.email"
        class="w-full"
        placeholder="somebody@example.com"
      />
    </UFormField>

    <UFormField label="Password" name="password">
      <div class="relative">
        <UInput
          v-model="state.password"
          :type="showPassword ? 'text' : 'password'"
          class="w-full"
          placeholder="Enter your password"
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

    <div class="text-left"></div>
    <UButton type="submit" class="w-full justify-center" :loading="isPending">
      Login
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { useLoginMutation } from "~/api/mutations/auth";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;
const showPassword = ref(false);

const state = reactive<Partial<Schema>>({
  email: "",
  password: "",
});

const toast = useToast();
const { loginDone, setAuthType } = useAuthStore();
const { mutateAsync: loginMutation, isPending } = useLoginMutation();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const { data } = await loginMutation(event.data);
    loginDone();
    saveToken(data.accessToken, data.refreshToken);
    setAuthType("login");
    toast.add({
      title: "Success",
      description: "Login successful.",
      color: "success",
    });
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Login failed.",
      color: "error",
    });
  }
}
</script>
