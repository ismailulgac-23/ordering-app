<template>
  <div class="w-screen h-screen overflow-hidden bg-gray-200">
    <div :class="loadingClasses">
      <Loading color="#000000" v-if="getLoading" />
      <template v-else>
        <Page />
        <Rightbar />
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { BounceLoader } from "vue3-spinner";
import Page from "./Page/index.vue";
import Rightbar from "./Rightbar/index.vue";
export default {
  name: "Detail",
  components: {
    Page,
    Rightbar,
    Loading: BounceLoader,
  },
  computed: {
    ...mapGetters({
      getLoading: "getLoading",
    }),
    loadingClasses() {
      return [
        "w-full h-full flex",
        {
          "items-center justify-center": this.getLoading,
        },
      ];
    },
  },
  methods: {
    ...mapActions({
      fetchDetail: "fetchDetail",
    }),
  },
  mounted() {
    const { uuid } = this.$route.params;
    this.fetchDetail(uuid);
  },
};
</script>

<style></style>
