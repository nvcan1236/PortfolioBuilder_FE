<template>
  <UForm
    :schema="resetPasswordSchema"
    :state="resetPasswordState"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField label="Code" name="code" class="w-full text-center">
      <UPinInput v-model="resetPasswordState.code" :length="6" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput
        v-model="resetPasswordState.password"
        type="password"
        class="w-full"
      />
    </UFormField>

    <UFormField label="Confirm Password" name="confirmPassword">
      <UInput
        v-model="resetPasswordState.confirmPassword"
        type="password"
        class="w-full"
      />
    </UFormField>

    <UButton
      type="submit"
      class="w-full justify-center gap-4"
      trailing-icon="lucide:send-horizontal"
    >
      Reset Password
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { useResetPasswordMutation } from "~/api/mutations/auth";

const resetPasswordSchema = z
  .object({
    code: z.array(z.string()),
    password: z.string().min(8, "Must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Must be at least 8 characters"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
type ResetPasswordSchema = z.output<typeof resetPasswordSchema>;

const resetPasswordState = reactive<Partial<ResetPasswordSchema>>({
  code: [],
  password: "",
  confirmPassword: "",
});

const toast = useToast();
const { setAuthType, user } = useAuthStore();
const { mutateAsync: resetPassword } = useResetPasswordMutation();
async function onSubmit(event: FormSubmitEvent<ResetPasswordSchema>) {
  try {
    if (!user) {
      throw new Error("User not found");
    }
    await resetPassword({
      email: user.email,
      code: event.data.code.join(""),
      newPassword: event.data.password,
    });
    setAuthType("login");
    toast.add({
      title: "Success",
      description: "Password reset successful.",
      color: "success",
    });
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Failed to reset password.",
      color: "error",
    });
  }
}
</script>
