<script setup>

</script>

<template>
  <button class="btn_hover"><slot></slot></button>
</template>

<style scoped>
button {
  border-radius: 20px;
  padding: 14px 24px;
  width: 238px;
  background: var(--yellow);
  font-weight: 500;
  font-size: 19px;
  line-height: 147%;
  text-align: center;
  color: var(--dark-select);
  opacity: 0.87;
}

@media (max-width: 1100px) {
  button {
    width: 100%;
  }
}
</style>