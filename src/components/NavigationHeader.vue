<template>
  <header id="header" class="py-8" v-if="user">
    <div class="container mt-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="h-10 w-10 overflow-hidden rounded-full"
          >
            <img
              class="w-full h-auto object-cover"
              size="sm"
              src="https://khoinguonsangtao.vn/wp-content/uploads/2022/05/anh-avatar-dep-ngau-hinh-dai-dien.jpg"
              alt="User's Profile Avatar"
            />
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">
            {{ meta.text }} {{ user.displayName }}
          </h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="t2ico text-2xl" :class="meta.icon"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const route = useRoute();
    const { getUser } = useUser();
    const { user } = getUser();
    return {
      meta: computed(() => route.meta),
      user,
    };
  },
};
</script>
