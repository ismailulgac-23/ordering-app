<template>
  <Draggable
    title="Sipariş Bilgileri"
    :items="getOrder.orderInfos"
    @changedIndex="onChangedIndex"
  />
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Draggable from "../Draggable/index.vue";
import { arrayMove } from "@/constants/helpers";
export default {
  components: { Draggable },
  name: "OrderInfo",
  computed: {
    ...mapGetters({
      getOrder: "getOrder",
      getOrderInfos: "getOrderInfos",
    }),
  },
  watch: {
    getOrderInfos(val) {
      console.log("val", val);
    },
  },
  methods: {
    ...mapMutations({
      setOrderInfos: "setOrderInfos",
    }),
    ...mapActions({
      sortOrderInfos: "sortOrderInfos",
    }),
    onChangedIndex(newIndex, oldIndex) {
      // changes row number for send to db
      const oldEl = this.getOrderInfos.find((_, index) => index === oldIndex);
      const newEl = this.getOrderInfos.find((_, index) => index === newIndex);
      oldEl.rowNumber = newIndex + 1;
      newEl.rowNumber = oldIndex + 1;
      this.setOrderInfos(
        this.getOrderInfos.map((item) => {
          if (item.uuid === newEl.uuid) {
            return {
              ...newEl,
            };
          } else if (item.uuid === oldEl.uuid) {
            return {
              ...oldEl,
            };
          }
          return { ...item };
        })
      );
    },
  },
  mounted() {
    console.log("this.getOrderInfos", this.getOrderInfos);
  },
};
</script>

<style></style>
