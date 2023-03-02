<template>
  <button
    @click="onPrint"
    class="w-full py-3.5 bg-black text-white cursor-pointer transition-all rounded-md"
  >
    YAZDIR
  </button>
</template>

<script>
export default {
  name: "PrintButton",
  methods: {
    onPrint() {
      this.$htmlToDocument("willPrint");
    },
  },
};
</script>

<style></style>
