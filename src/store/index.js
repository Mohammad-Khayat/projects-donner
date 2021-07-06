import Vue from "vue";
import Vuex from "vuex";
import ProjectsModule from "./projects/index.js";
import OffersModule from "./offers/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ProjectsModule,
    OffersModule,
  },
});
