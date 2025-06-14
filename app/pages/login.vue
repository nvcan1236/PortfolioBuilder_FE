<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

definePageMeta({
  layout: "blank",
});

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

<template>
  <div class="flex items-stretch justify-center w-full min-h-dvh">
    <div
      class="w-2/3 to-blue-normal bg-gradient-to-t items-center justify-center p-12 lg:flex hidden"
    >
      <UCard class="w-full shadow-lg">
        <img src="/thumbnail.png" alt="" />
      </UCard>
    </div>
    <div class="py-10 flex-1 flex flex-col">
      <Logo variant="extend" />
      <div class="flex-1 flex justify-center items-center h-full">
        <UCard class="w-full max-w-md bg-white border-none" variant="soft">
          <template #header>
            <h3 class="text-2xl font-bold">Login</h3>
            <p class="text-sm text-gray-500">
              And start the manage your projects
            </p>
          </template>
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
                      :icon="
                        showPassword
                          ? 'i-heroicons-eye-slash'
                          : 'i-heroicons-eye'
                      "
                    />
                  </template>
                </UInput>
              </div>
            </UFormField>

            <div class="text-left">
              <UButton variant="link" class="text-blue-normal font-light">
                Forgot password?
              </UButton>
            </div>
            <UButton type="submit" class="w-full justify-center">
              Submit
            </UButton>
          </UForm>
        </UCard>
      </div>
      <p class="text-xs font-light text-gray-500 text-center">
        Don't have a account yet?
        <NuxtLink to="/" class="text-blue-normal">Register</NuxtLink>
      </p>
    </div>
  </div>
</template>
