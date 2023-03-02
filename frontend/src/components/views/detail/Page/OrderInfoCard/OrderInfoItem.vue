<template>
  <div class="flex items-center gap-1.5">
    <h1 class="font-bold">{{ item.name }}:</h1>
    <h1>{{ item.value }}</h1>
  </div>
</template>

<script>
export default {
  name: "OrderInfoItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
