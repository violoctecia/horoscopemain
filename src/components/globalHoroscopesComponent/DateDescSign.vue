<script setup>
import {ref} from 'vue';
import {defineProps} from 'vue';

// Определение пропсов
const props = defineProps({
  sign: String,
  signsData: Array,
});

// Создание ссылки на массив знаков
const signsData = ref(props.signsData);

// Функция для поиска знака по его русскому названию
const findSignByRussianName = (signName) => {
  return signsData.value.find(sign => sign.ru === signName);
};

// Найденный объект знака
const foundSign = ref(findSignByRussianName(props.sign));
</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <div class="block">
          <component :is="foundSign.image" class="img"></component>
          <h1 class="title">Описание знака: {{ foundSign.ru }}</h1>
          <p class="desc">{{ foundSign.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img {
  border-radius: 49px;
  padding: 12px;
  width: 96px;
  height: 96px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-select);
}

.block {
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    line-height: 110%;
    text-align: start;
    margin-bottom: 32px;
  }
}

.container {
  max-width: 720px;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

@media (max-width: 1100px) {
  .wrapper {
    gap: 20px;
  }

  .img {
    width: 64px;
    height: 64px;
    margin-bottom: 12px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  .block {
    h1 {
      margin-bottom: 16px;
      font-size: 24px;
      line-height: 117%;
    }

    p {
      font-size: 15px;
      line-height: 160%;
    }
  }


  .info_wrapper {
    gap: 6px;
    margin-bottom: 16px;
  }

}
</style>