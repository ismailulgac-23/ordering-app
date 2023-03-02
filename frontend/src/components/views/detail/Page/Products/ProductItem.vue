<template>
  <tr class="text-center">
    <td>
      <img :src="getImage" class="w-36 h-36 rounded-md object-contain" />
    </td>
    <td>
      <h1>{{ product.title }}</h1>
    </td>
    <td>
      <h1>{{ product.price }} ₺</h1>
    </td>
  </tr>
</template>

<script>
import { UPLOADS_URL } from "@/constants/config";
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getImage() {
      return UPLOADS_URL + this.product.image;
    },
  },
};
</script>

<style></style>
