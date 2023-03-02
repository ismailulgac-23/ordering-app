<template>
  <div class="border-b px-3 py-2.5 flex items-center justify-between">
    <h1 class="font-bold text-xl">SİPARİŞ DETAY SAYFASI</h1>
    <h1>{{ date }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
