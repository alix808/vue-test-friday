<template>
  <div>
    <div v-if="getSubmit">
      <div class="flex">
        <h1>Correct Answer:</h1>
        <h1 class="margin">{{ getRandomCapital }}</h1>
      </div>
      <div class="flex">
        <h1>Your Answer Answer:</h1>
        <h1 class="margin">{{ getGuess }}</h1>
      </div>
    </div>
    <div class="text" v-if="getCorrectAnswer">correct answer!</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Result",

  computed: {
    ...mapGetters([
      "getRandomCountry",
      "getGuess",
      "getSubmit",
      "getCorrectAnswer",
    ]),
    getRandomCapital() {
      return this.getRandomCountry.capital;
    },
    computeGuess() {
      return this.getGuess;
    },
  },
  methods: {
    ...mapActions(["submitClick", "correctAnswer"]),
  },
  watch: {
    computeGuess() {
      const guess = this.computeGuess;
      const answer = this.getRandomCapital;

      if (guess != answer) {
        this.submitClick(true);
      }

      if (guess === answer) {
        this.submitClick(false);
        this.correctAnswer(true);
      }
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: flex-start;
  width: 50%;
  margin-top: 14px;
}

h1 {
  color: white;
  font-size: 17px;
}

.margin {
  margin-left: 10px;
}

.text {
  color: #28a745;
  font-size: 17px;
  margin-top: 14px;
}
</style>
