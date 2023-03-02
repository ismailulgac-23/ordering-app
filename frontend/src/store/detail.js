import * as API from "@/api/order";
// page-types
export const state = () => ({
  saving: false,
  order: {},
  loading: true,
});

export const mutations = {
  setSaving(state, payload) {
    state.saving = payload;
  },
  setPrintPageType(state, payload) {
    state.order.printPageType = payload;
  },
  setOrder(state, payload) {
    state.order = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setOrderInfos(state, payload) {
    state.order.orderInfos = payload;
  },
  setWithoutUnSelectedOrderInfos(state) {
    state.order.orderInfos = state.order.orderInfos.filter(
      (el) => el.selected == true
    );
  },
};

export const getters = {
  getOrder(state) {
    return state.order;
  },
  getSaving(state) {
    return state.saving;
  },
  getLoading(state) {
    return state.loading;
  },
  getOrderInfos(state) {
    return state.order.orderInfos ?? {};
  },
  getProducts(state) {
    return state.order.products;
  },
};

export const actions = {
  fetchDetail({ commit, dispatch }, uuid) {
    commit("setLoading", true);
    API.getOrder(uuid)
      .then(({ data }) => {
        console.log("data", data);
        commit("setOrder", {
          ...data,
          orderInfos: data.orderInfos.map((item) => {
            return { ...item, selected: true };
          }),
        });
        dispatch("sortOrderInfos");
      })
      .catch(() => {
        toast.error("Bir hata oluştu!");
      })
      .finally(() => {
        commit("setLoading", false);
      });
  },
  sortOrderInfos({ commit, getters }) {
    const blobOrderInfos = getters.getOrderInfos;
    blobOrderInfos.sort((a, b) => a.rowNumber - b.rowNumber);
    console.log("blobOrderInfos", blobOrderInfos);
    commit("setOrderInfos", blobOrderInfos);
  },
};
