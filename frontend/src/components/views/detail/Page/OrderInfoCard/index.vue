<template>
  <div class="px-7 py-5">
    <div class="bg-gray-100 rounded-lg px-3 py-2">
      <template v-if="filteredOrderInfos.length">
        <OrderInfoItem
          v-for="item in filteredOrderInfos"
          :key="item.uuid"
          :item="item"
        />
      </template>
      <div v-else class="flex items-center justify-center py-5">
        Sipariş bilgisi bulunamadı!
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OrderInfoItem from "./OrderInfoItem.vue";
export default {
  components: { OrderInfoItem },
  name: "OrderInfoCard",
  computed: {
    ...mapGetters({
      getOrderInfos: "getOrderInfos",
    }),
    filteredOrderInfos() {
      return this.getOrderInfos.filter((el) => el.selected != false);
    },
  },
};
</script>

<style></style>
