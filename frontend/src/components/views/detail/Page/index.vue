<template>
  <div class="page-container overflow-y-auto overflow-x-hidden">
    <div class="container h-full mx-auto flex items-center justify-center">
      <div id="willPrint" :class="getPrintPageType">
        <Header :date="getFormattedDate" />
        <OrderInfoCard />
        <Products />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import Header from "./Header.vue";
import Products from "./Products/index.vue";
import OrderInfoCard from "./OrderInfoCard/index.vue";
export default {
  name: "Page",
  components: {
    Header,
    OrderInfoCard,
    Products,
  },
  computed: {
    ...mapGetters({
      getOrder: "getOrder",
    }),
    getPrintPageType() {
      return [
        "mx-auto h-full bg-white rounded-md shadow-sm",
        {
          a4: this.getOrder.printPageType == "A4",
          a5: this.getOrder.printPageType == "A5",
          "thermal-printer": this.getOrder.printPageType == "THERMAL_PRINTER",
        },
      ];
    },
    getFormattedDate() {
      return moment(this.getOrder.createdAt).calendar();
    },
  },
};
</script>

<style scoped>
.page-container {
  width: 80%;
}
.a4 {
  width: 793.7007874px !important;
  height: 793.519685px !important;
}
.a5 {
  width: 559.37007874px !important;
  height: 793.7007874px !important;
}
.thermal-printer {
  width: 402.37007874px !important;
  height: 793.7007874px !important;
}
</style>
