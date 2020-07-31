<template>
  <div class="container">
    <Cities />
    <Guess />
    <Result />
  </div>
</template>

<script>
import Cities from './components/Cities.vue';
import Guess from './components/Guess.vue';
import Result from './components/Result.vue';

export default {
  name: 'App',
  components: {
    Cities,
    Guess,
    Result,
  },
};
</script>

<style>
:root {
  --dark: #252423;
  --light: #444342;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background: var(--dark);
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
  margin-top: 14px;
}
</style>
