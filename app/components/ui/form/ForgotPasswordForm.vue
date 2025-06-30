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

    <UButton
      type="submit"
      class="w-full justify-center gap-4"
      trailing-icon="lucide:send-horizontal"
    >
      Send Email
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  email: z.string().email("Invalid email"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: "someone@email.com",
});

const toast = useToast();
const { loginDone } = useAuthStore();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}

const handleLogin = () => {
  loginDone();
  navigateTo("/");
};
</script>
