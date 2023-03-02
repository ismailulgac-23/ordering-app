import { createStore } from "vuex";
import * as detail from "./detail";
export default createStore({
  modules: {
    detail: detail,
  },
});
