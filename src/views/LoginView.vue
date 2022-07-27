<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start Form  -->
      <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
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
            Sign In
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
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', param: {} }"
            class="text-primary font-bold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignIn } from "@/composables/useSignIn";
export default {
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) router.push({ name: "Profile", params: {} });
    }
    return {
      onSubmit,
      email,
      password,
      error,
      isPending,
    };
  },
};
</script>
