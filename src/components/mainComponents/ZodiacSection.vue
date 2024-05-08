<script setup>
import ZodiacsList from "@/components/globalComponents/ZodiacsList.vue";
</script>

<template>
  <section class="zodiac">
    <div class="container">
      <div class="text">
        <h1 class="title">Зодиакальный гороскоп</h1>
        <p>Узнай, что говорят звёзды о твоей жизни</p>
      </div>
      <ZodiacsList :scroll="true"></ZodiacsList>
    </div>
  </section>
</template>

<style scoped>
.text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 64px;
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 133%;
    text-align: center;
    color: var(--dark-select-10);
  }
}
@media (max-width: 1100px) {
  .text {
    margin-bottom: 20px;
    padding-left: 24px;
    p {
      display: none;
    }
  }
  .zodiac .container {
    padding: 0;
  }
  .zodiac {
    overflow: hidden;
  }
}
</style>
