<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import CheckDate from "@/components/globalHoroscopesComponent/CheckDate.vue";
import {useRoute} from "vue-router";
import {readonly, ref, watch} from 'vue';

import {japaneseSigns} from "@/components/japaneseComponents/japanese.js";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import DefaultDescSign from "@/components/globalHoroscopesComponent/DefaultDescSign.vue";

const signs = readonly(japaneseSigns);
const route = useRoute();
const currentSign = ref(route.params.sign);

// Функция для нахождения объекта знака по его английскому названию
const findSignByEnglishName = (englishName) => {
  return signs.find(sign => sign.en === englishName);
};

// Найденный объект знака
const foundSign = ref(findSignByEnglishName(currentSign.value));

// Следим за изменением параметра URL и обновляем foundSign при изменении
watch(
    () => route.params.sign,
    (newSign) => {
      currentSign.value = newSign;
      foundSign.value = findSignByEnglishName(newSign);
    }
);
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/japanese">Японский гороскоп</router-link>
      <router-link :to="`/horoscope/japanese/sign/${foundSign.en}`">{{ foundSign.ru }}</router-link>
    </template>
  </PageLinks>
  <DefaultDescSign :sign="foundSign"></DefaultDescSign>
  <CheckDate :horoscopeType="'japanese'" :title="'Японский гороскоп'"  :mb="40"></CheckDate>
  <CheckSign :signsData="signs" :title="'Описание знаков в Японском гороскопе'" :horoscopeType="'japanese'"></CheckSign>
</template>

<style scoped>
</style>