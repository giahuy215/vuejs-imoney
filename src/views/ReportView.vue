<template>
  <div class="row mb-20">
    <div class="container mx-auto p-6">
      <div class="title font-bold text-primary text-2xl w-full">
        List Transactions
      </div>
      <div class="font-semibold text-gray-700 text-lg mt-4 w-full">Today</div>
      <div
        class="grid grid-cols-2 h-16 w-full mt-4 rounded-lg shadow-sm bg-white"
        v-for="transaction in transactions"
        :key="transaction.userId"
      >
        <div class="list-left grid grid-rows-2 ml-4 mt-2">
          <div class="font-bold text-xl">{{ transaction.category }}</div>
          <div class="text-base">{{ transaction.note }}</div>
        </div>
        <div class="list-right grid grid-rows-2 mr-4 mt-2">
          <div class="font-bold text-lg text-rose-700 text-right">
            -${{ transaction.total }}
          </div>
          <div class="text-sm text-right">{{ transaction.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  setup() {},

  computed: {
    ...mapGetters(["transactions"]),
  },
  methods: {
    ...mapMutations(["setTransactions"]),
    ...mapActions(["fetchTransactions"]),
  },
};
</script>
