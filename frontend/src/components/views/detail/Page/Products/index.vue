<template>
  <div class="px-3 py-2.5">
    <table class="table-auto">
      <thead>
        <tr>
          <th>Resim</th>
          <th>Başlık</th>
          <th>Fiyat</th>
        </tr>
      </thead>
      <tbody>
        <ProductItem
          v-for="orderProduct in getProducts"
          :key="orderProduct.product.uuid"
          :product="orderProduct.product"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "./ProductItem.vue";
export default {
  name: "Products",
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters({
      getProducts: "getProducts",
    }),
  },
};
</script>

<style></style>
