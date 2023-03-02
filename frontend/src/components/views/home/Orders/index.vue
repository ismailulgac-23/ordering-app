<template>
  <table v-if="orders.length" class="table-auto">
    <thead>
      <tr>
        <th>Kimlik</th>
        <th>Resim</th>
        <th>Detay</th>
      </tr>
    </thead>
    <tbody>
      <OrderItem v-for="order in orders" :key="order.uuid" :order="order" />
    </tbody>
  </table>
  <NotFound v-else />
</template>

<script>
import OrderItem from "./OrderItem.vue";
import NotFound from "./NotFound.vue";
export default {
  name: "Orders",
  components: {
    OrderItem,
    NotFound,
  },
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
