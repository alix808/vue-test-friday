<template functional>
  <div class="circleBorder">
    <div class="circleCore"></div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
.circleBorder {
  margin-right: 20px;
  width: 36px;
  height: 36px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63, 249, 220);
  background: linear-gradient(
    0deg,
    rgba(63, 249, 220, 0.1) 33%,
    rgba(63, 249, 220, 1) 100%
  );
  animation: spin 0.8s linear 0s infinite;
}
.circleCore {
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  border-radius: 50%;
}
</style>