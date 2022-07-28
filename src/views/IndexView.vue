<template>
  <!-- Total balance -->
  <div class="row">
    <div class="container mx-auto p-6">
      <div class="text-center">
        <div class="font-bold text-primary text-2xl">$ 460000</div>
        <div class="font-semibold text-xl text-gray-700 mt-3">
          Total Balance
        </div>
      </div>
    </div>
  </div>

  <!-- Summary -->
  <div class="row">
    <div class="container mx-auto p-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="income bg-green w-full rounded-md text-white p-3">
          <h3 class="ml-4 font-bold text-xl">
            Income
            <i class="t2ico t2ico-trending-up"></i>
          </h3>
          <p class="ml-4 font-semibold text-base mt-2">$ 500000</p>
        </div>
        <div class="expense bg-red w-full rounded-md text-white p-3">
          <h3 class="ml-4 font-bold text-xl">
            Expense
            <i class="t2ico t2ico-trending-down"></i>
          </h3>
          <p class="ml-4 font-semibold text-base mt-2">$ 40000</p>
        </div>
      </div>
    </div>
  </div>

  <!--  -->
  <div class="row">
    <div class="container mx-auto p-6">
      <div class="title font-bold text-primary text-2xl w-full">
        Recent Transactions
      </div>
      <div class="font-semibold text-gray-700 text-lg mt-4 w-full">Today</div>
      <div
        class="grid grid-cols-2 h-16 w-full mt-4 rounded-lg shadow-sm bg-white"
      >
        <div class="list-left grid grid-rows-2 ml-4 mt-2">
          <div class="font-bold text-xl">Shoes</div>
          <div class="text-base">Sneaker Nike</div>
        </div>
        <div class="list-right grid grid-rows-2 mr-4 mt-2">
          <div class="font-bold text-lg text-rose-700 text-right">-$10000</div>
          <div class="text-sm text-right">Jul 28</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
