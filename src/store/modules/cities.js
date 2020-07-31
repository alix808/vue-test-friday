import axios from 'axios';

const state = {
  countries: [],
  random: {},
  guessCapital: '',
  submitClick: false,
  correctAnswer: false,
  loading: false,
};

const getters = {
  getCountries: (state) => state.countries,
  getRandomCountry: (state) => state.random,
  getGuess: (state) => state.guessCapital,
  getSubmit: (state) => state.submitClick,
  getCorrectAnswer: (state) => state.correctAnswer,
  getLoading: (state) => state.loading,
};

const actions = {
  async fetchCountries({ commit, dispatch }) {
    dispatch('loadingAction', true);
    try {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      commit('setCountries', response.data);
      dispatch('loadingAction', false);
    } catch (error) {
      console.error(error);
      dispatch('loadingAction', false);
    }
  },
  randomCountry({ commit }, countries) {
    const item = countries[Math.floor(Math.random() * countries.length)];
    commit('setRandom', item);
  },

  guessCapital({ commit, dispatch }, text) {
    dispatch('submitClick');
    commit('setGuess', text);
  },

  submitClick({ commit }, boolean) {
    commit('setSubmit', boolean);
  },

  correctAnswer({ commit }, boolean) {
    commit('setAnswer', boolean);
  },

  loadingAction({ commit }, boolean) {
    commit('setLoading', boolean);
  },
};

const mutations = {
  setCountries: (state, countries) => (state.countries = countries),
  setRandom: (state, item) => (state.random = item),
  setGuess: (state, item) => (state.guessCapital = item),
  setSubmit: (state, boolean) => (state.submitClick = boolean),
  setAnswer: (state, boolean) => (state.correctAnswer = boolean),
  setLoading: (state, boolean) => (state.loading = boolean),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
