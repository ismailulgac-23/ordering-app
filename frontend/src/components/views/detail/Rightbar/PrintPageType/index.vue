<template>
  <Select
    :items="getItems"
    @handleChange="onSelectItem"
    title="Sayfa Türü"
    :selected="getOrder.printPageType"
  />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Select from "../Select/index.vue";
export default {
  components: {
    Select,
  },
  methods: {
    ...mapMutations({
      setPrintPageType: "setPrintPageType",
    }),
    onSelectItem(val) {
      this.setPrintPageType(val);
    },
  },
  computed: {
    ...mapGetters({
      getOrder: "getOrder",
    }),
    getItems() {
      return [
        { name: "A4", value: "A4" },
        { name: "A5", value: "A5" },
        { name: "Termal Yazıcı", value: "THERMAL_PRINTER" },
      ];
    },
  },
};
</script>

<style></style>
