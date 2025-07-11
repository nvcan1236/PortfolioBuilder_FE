<template>
  <UForm
    :schema="verifyEmailSchema"
    :state="verifyEmailState"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField label="Email" name="email">
      <UInput v-model="verifyEmailState.email" class="w-full" />
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
import { useVerifyEmailMutation } from "~/api/mutations/auth";

const verifyEmailSchema = z.object({
  email: z.string().email("Invalid email"),
});

type VerifyEmailSchema = z.output<typeof verifyEmailSchema>;

const verifyEmailState = reactive<Partial<VerifyEmailSchema>>({
  email: "",
});
const toast = useToast();
const { setAuthType, setUser } = useAuthStore();
const { mutateAsync: verifyEmail } = useVerifyEmailMutation();
async function onSubmit(event: FormSubmitEvent<VerifyEmailSchema>) {
  try {
    await verifyEmail({
      email: event.data.email,
    });
    setAuthType("reset-password");
    setUser({
      email: event.data.email,
      id: "",
      fullName: "",
      username: "",
      phoneNumber: "",
      avatar: "",
      active: false,
      lastLogin: "",
    });
    toast.add({
      title: "Success",
      description: "A code has been sent to your email.",
      color: "success",
    });
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Failed to send code.",
      color: "error",
    });
  }
}
</script>
