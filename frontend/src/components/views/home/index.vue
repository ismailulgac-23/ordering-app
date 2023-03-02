<template>
  <div
    class="container flex flex-col items-center justify-center mx-auto py-12"
  >
    <h1 class="text-4xl font-bold mb-5">SİPARİŞLER</h1>
    <Loading v-if="loading" color="#000000" />
    <Orders :orders="orders" v-else />
  </div>
</template>

<script>
import * as API from "@/api/order";
import Orders from "./Orders/index.vue";
import { BounceLoader } from "vue3-spinner";
import { toast } from "vue3-toastify";
export default {
  name: "Home",
  components: {
    Orders,
    Loading: BounceLoader,
  },
  data: () => ({
    orders: [],
    loading: false,
    error: false,
  }),
  methods: {
    fetchOrders() {
      this.loading = true;
      API.getOrders()
        .then(({ data }) => {
          this.orders = data;
        })
        .catch(() => {
          toast.error("Bir hata oluştu!");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.fetchOrders();
  },
};
</script>

<style></style>
