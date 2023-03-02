<template>
  <tr>
    <td>{{ order.uuid.slice(0, 12) + "..." }}</td>
    <td>
      <img
        :src="getImage"
        class="w-36 h-36 rounded-md object-contain border border-gray-200"
      />
    </td>
    <td>
      <router-link :to="getDetailLink"
        ><button class="px-5 py-2 border border-gray-200">
          Detay
        </button></router-link
      >
    </td>
  </tr>
</template>

<script>
import { UPLOADS_URL } from "@/constants/config";
export default {
  name: "OrderItem",
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getImage() {
      return UPLOADS_URL + this.order.products[0].product.image;
    },
    getDetailLink() {
      return `/detail/${this.order.uuid}`;
    },
  },
};
</script>

<style></style>
