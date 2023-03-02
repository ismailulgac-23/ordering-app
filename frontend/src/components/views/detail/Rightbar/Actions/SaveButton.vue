<template>
  <button
    @click="onSave"
    class="w-full py-3.5 border border-gray-300 hover:bg-gray-100 transition-all rounded-md"
  >
    {{ getButtonText }}
  </button>
</template>

<script>
import * as API from "@/api/order";
import { mapGetters, mapMutations } from "vuex";
import { toast } from "vue3-toastify";
export default {
  name: "SaveButton",
  data: () => ({
    error: false,
  }),
  computed: {
    ...mapGetters({
      getOrder: "getOrder",
      getSaving: "getSaving",
    }),
    getButtonText() {
      if (this.getSaving) {
        return "KAYDEDİLİYOR..";
      } else {
        return "KAYDET";
      }
    },
  },
  methods: {
    ...mapMutations({
      setSaving: "setSaving",
      setWithoutUnSelectedOrderInfos: "setWithoutUnSelectedOrderInfos",
    }),
    onSave() {
      if (!this.getSaving) {
        this.setSaving(true);
        const { orderInfos, printPageType } = this.getOrder;
        const uuid = this.$route.params.uuid;
        API.updateOrder(uuid, { orderInfos, printPageType })
          .then(({ data }) => {
            toast.success(data.message);
            this.setWithoutUnSelectedOrderInfos();
          })
          .catch(() => {
            toast.error("Bir hata oluştu!");
          })
          .finally(() => {
            this.setSaving(false);
          });
      }
    },
  },
};
</script>

<style></style>
