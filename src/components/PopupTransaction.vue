<template>
  <div class="popup border">
    <div class="popup-inner border-2 border-blue-600">
      <slot></slot>
      <!-- <button
        class="popup-close bg-primary rounded-md text-white w-20 h-8 mt-4"
        @click="togglePopup()"
      >
        Confirm
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["togglePopup"],

  setup() {},
};
</script>

<style lang="css" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  background-color: #fff;
  padding: 32px;
}
</style>
