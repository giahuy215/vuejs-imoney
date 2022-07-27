<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start Form  -->
      <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              type="text"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              id="fullName"
              placeholder="iMoney..."
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Adress</span>
            <input
              type="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              id="email"
              placeholder="example@gmail.com"
              autocomplete="username"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              type="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              id="password"
              placeholder="iMoney..."
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign Up
          </button>
          <button
            v-else
            type="button"
            class="py-3 text-center w-full text-white font-bold rounded-lg cursor-not-allowed bg-gray-800"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>
      <!-- Start Error -->
      <div v-if="error" class="text-left mt-4 text-red">
        <span>{{ error }}</span>
      </div>
      <!-- Start Direction -->
      <div class="w-full mt-6 text-center">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', param: {} }"
            class="text-primary font-bold"
            >Sign In
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp";
export default {
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const router = useRouter();

    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      await signUp(email.value, password.value, fullName.value);
      if (!error.value) router.push({ name: "Login", params: {} });
    }
    return {
      onSubmit,
      fullName,
      email,
      password,
      error,
      isPending,
    };
  },
};
</script>
