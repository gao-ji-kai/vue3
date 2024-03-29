import { createStore } from "vuex";
import home from "./modules/home";
import { IHomeState } from "@/typing/home";

export interface IGlobalState {
  home: IHomeState;
}

const store = createStore<IGlobalState>({
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    home
  },
});
export default store;
