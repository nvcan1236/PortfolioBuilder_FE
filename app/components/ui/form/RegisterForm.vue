<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Full Name" name="fullName">
      <UInput v-model="state.fullName" class="w-full" />
    </UFormField>
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" class="w-full" />
    </UFormField>
    <UFormField label="Phone Number" name="phoneNumber">
      <UInput v-model="state.phoneNumber" class="w-full" />
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

    <UFormField label="Password Confirmation" name="confirmPassword">
      <div class="relative">
        <UInput
          v-model="state.confirmPassword"
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
    <UButton
      type="submit"
      class="w-full justify-center"
      :loading="isRegisterPending"
    >
      Create Account
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { useRegisterMutation } from "~/api/mutations/auth";
type Schema = z.output<typeof schema>;
const showPassword = ref(false);
const toast = useToast();
const { loginDone, setAuthType } = useAuthStore();
const { mutateAsync: registerMutation, isPending: isRegisterPending } =
  useRegisterMutation();

const schema = z
  .object({
    fullName: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Must be at least 8 characters"),
    phoneNumber: z.string().min(10, "Must be at least 10 characters"),
    confirmPassword: z.string().min(8, "Must be at least 8 characters"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const state = reactive<Partial<Schema>>({
  fullName: "",
  email: "",
  password: "",
  phoneNumber: "",
  confirmPassword: "",
});

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  try {
    const { data } = await registerMutation(event.data);
    loginDone();
    saveToken(data.accessToken, data.refreshToken);
    setAuthType("login");
    toast.add({
      title: "Success",
      description: "Register successful.",
      color: "success",
    });
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Register failed.",
      color: "error",
    });
  }
};
</script>
