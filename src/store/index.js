import Vuex from 'vuex';
import Vue from 'vue';
import cities from './modules/cities';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    cities,
  },
});
