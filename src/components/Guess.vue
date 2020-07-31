<template>
  <div>
    <form @submit="onSubmit">
      <input type="text" v-model="text" placeholder="Guess Capital City..." />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Guess',
  data: () => ({
    text: '',
  }),
  methods: {
    ...mapActions(['guessCapital']),
    onSubmit(e) {
      e.preventDefault();
      this.guessCapital(this.text);
      this.text = '';
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  margin-top: 14px;
}
input[type='text'] {
  flex: 10;
  padding: 10px;
  border: 1px solid var(--light);
  background: var(--dark);
  color: white;
  outline: 0;
}
input[type='submit'] {
  flex: 2;
  background: var(--dark);
  color: white;
  border: 1px solid var(--light);
  cursor: pointer;
}

input:focus {
  outline: none;
}
</style>
