<script setup>
import ZodiacsList from "@/components/globalComponents/ZodiacsList.vue";
</script>

<template>
  <section class="main">
    <div class="container">
      <div class="text">
        <h1>Зодиакальный гороскоп <span>для всех знаков зодиака</span></h1>
        <p>Гороскоп на каждый день: узнай, что приготовили для тебя звёзды</p>
      </div>
      <ZodiacsList :wrap="true"></ZodiacsList>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 96px;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
h1 {
  font-weight: 900;
  font-size: 80px;
  line-height: 107%;
  text-align: center;
  color: var(--yellow);

  span {
    font-weight: 900;
    font-size: 56px;
    line-height: 107%;
    text-align: center;
    color: var(--dark-select-10);
  }
}
p {
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  text-align: center;
  color: var(--dark-select-10);
}

@media (max-width: 1100px) {
  .container {
    gap: 40px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 8px;
  }
  h1 {
    font-weight: 900;
    font-size: 32px;
    line-height: 119%;
    color: var(--yellow);

    span {
      font-weight: 900;
      font-size: 32px;
      line-height: 119%;
      color: var(--dark-select-10);
    }
  }
  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 153%;
    color: var(--dark-select-10);
  }
}
@media (max-width: 570px) {
  h1 {
    text-align: start;

    span {
      text-align: start;
    }
  }
  p {
    text-align: start;
  }
}
</style>
