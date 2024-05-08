<script setup>
const props = defineProps({
  title: String,
  desc: String,
});

</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <h1 class="title">{{ props.title }}</h1>
        <p class="page_desc">{{ props.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  padding-left: 48px;
  padding-right: 288px;
}
h1 {
  text-align: start;
  margin-bottom: 32px;
}
p {
  text-align: start;
}
@media (max-width: 1100px) {
  .wrapper {
    border: 1px solid var(--dark-main-80);
    border-radius: 16px;
    padding: 24px;
    background: var(--dark-main);
  }
}
</style>