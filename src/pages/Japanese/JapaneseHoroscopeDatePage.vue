<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import { japaneseSigns } from "@/components/japaneseComponents/japanese.js";
import DateInfo from "@/components/globalHoroscopesComponent/DateInfo.vue";
import { shallowRef } from 'vue';

import DateDescSign from "@/components/globalHoroscopesComponent/DateDescSign.vue";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import OtherEastwTitle from "@/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";

const signs = shallowRef(japaneseSigns);
const route = useRoute();
const rawDate = ref(route.params.date);
// Функция для извлечения года из даты
const extractYearFromDate = (dateString) => {
  const [, , year] = dateString.split('-').map(Number);
  return year;
};

// Функция для нахождения знака по дате рождения
const findSignByDate = (date) => {
  const year = extractYearFromDate(date);
  const signIndex = (year - 1900) % 12;
  return signs.value[signIndex].ru; // Возвращает русское название знака
};

// Инициализация переменной с данными о дате
const date = ref({ year: null, sign: null });

// Нахождение знака по полученной дате
date.value = { year: extractYearFromDate(rawDate.value), sign: findSignByDate(rawDate.value) };

const filteredSigns = ref(signs.value.filter(sign => sign.ru !== date.value.sign));

// Обновление значения date.sign при изменении даты
watchEffect(() => {
  date.value.sign = findSignByDate(rawDate.value);
  filteredSigns.value = signs.value.filter(sign => sign.ru !== date.value.sign);
});
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/japanese">Японский гороскоп</router-link>
      <router-link :to="`/horoscope/japanese/date/${rawDate}`">Гороскоп по дате рождения: {{ rawDate }}</router-link>
    </template>
  </PageLinks>
  <DateInfo :title="'Японский гороскоп'" :sign="date.sign" :year="rawDate"></DateInfo>
  <DateDescSign :sign="date.sign" :signsData="signs"></DateDescSign>
  <CheckSign :signsData="filteredSigns" :title="'Другие знаки в Японском гороскопе'" :horoscopeType="'japanese'"></CheckSign>
  <ZodiacListwTitle></ZodiacListwTitle>
  <OtherEastwTitle :japanese="true"></OtherEastwTitle>
  <OtherSection></OtherSection>
</template>