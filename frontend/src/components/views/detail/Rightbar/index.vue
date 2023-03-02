<template>
  <div class="w-1/5 bg-white shadow-md h-full">
    <div class="w-full h-full flex flex-col items-center justify-between">
      <div class="w-full flex flex-col">
        <PrintPageType />
        <div class="w-full h-px bg-gray-200"></div>
        <OrderInfo />
      </div>
      <Actions />
    </div>
  </div>
</template>

<script>
import PrintPageType from "./PrintPageType/index.vue";
import OrderInfo from "./OrderInfo/index.vue";
import Actions from "./Actions/index.vue";
export default {
  name: "Rightbar",
  components: {
    PrintPageType,
    OrderInfo,
    Actions,
  },
};
</script>

<style></style>
