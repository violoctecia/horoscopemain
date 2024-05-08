<script setup>

import ZodiacsList from "@/components/globalComponents/ZodiacsList.vue";
</script>

<template>
  <section>
    <div class="container">
      <h1 class="title">Зодиакальный гороскоп</h1>
      <ZodiacsList :wrap="true"></ZodiacsList>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-bottom: 64px;
}
@media (max-width: 1100px) {
  h1 {
    margin-bottom: 20px;
  }
}
</style>