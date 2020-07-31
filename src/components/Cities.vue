<template>
  <div>
    <div class="spinnerContainer">
      <Spinner v-if="getLoading" />
    </div>
    <div class="flex">
      <h1>Random Country:</h1>
      <h1>{{ getRandomCountryName }}</h1>
      <i class="fas fa-arrow-circle-right" @click="reset" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Spinner from "./Spinner";
export default {
  name: "Cities",
  components: {
    Spinner,
  },
  methods: {
    ...mapActions([
      "fetchCountries",
      "randomCountry",
      "submitClick",
      "correctAnswer",
    ]),
    reset() {
      this.randomCountry(this.getCountries);
      this.submitClick(false);
      this.correctAnswer(false);
    },
  },
  computed: {
    ...mapGetters(["getCountries", "getRandomCountry", "getLoading"]),
    getRandomCountryName() {
      return this.getRandomCountry.name;
    },
  },
  created() {
    this.fetchCountries();
  },
  watch: {
    getCountries() {
      this.randomCountry(this.getCountries);
    },
  },
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 17px;
}
.flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;
}

i {
  color: white;
  cursor: pointer;
}

.spinnerContainer {
  height: 36px;
  width: 100%;
}
</style>
