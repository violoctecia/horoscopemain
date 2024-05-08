<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import { zoroastrianSigns } from "@/pages/Zoroastrian/zoroastrian.js"
import DateInfo from "@/components/globalHoroscopesComponent/DateInfo.vue";
import { shallowRef } from 'vue';
import DateDescSign from "@/components/globalHoroscopesComponent/DateDescSign.vue";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import OtherEastwTitle from "@/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";

const signs = shallowRef(zoroastrianSigns);
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
  let signIndex = (year - 1951) % zoroastrianSigns.length; // Начинаем считать с 1951 года, когда бык
  if (signIndex < 0) signIndex += zoroastrianSigns.length; // Если получили отрицательный результат, добавляем длину массива
  return signs.value[signIndex].ru; // Возвращает русское название знака
};

// Инициализация переменной с данными о дате
const date = ref({ year: null, sign: null });

const filteredSigns = ref(signs.value.filter(sign => sign.ru !== date.value.sign));
// Нахождение знака по полученной дате
date.value = { year: extractYearFromDate(rawDate.value), sign: findSignByDate(rawDate.value) };

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
      <router-link to="/horoscope/zoroastrian">Зороастрийский гороскоп</router-link>
      <router-link :to="`/horoscope/zoroastrian/date/${rawDate}`">Гороскоп по дате рождения: {{ rawDate }}</router-link>
    </template>
  </PageLinks>
  <DateInfo :title="'Зароастрийский гороскоп'" :sign="date.sign" :year="rawDate"></DateInfo>
  <DateDescSign :sign="date.sign" :signsData="signs"></DateDescSign>
  <CheckSign :signsData="filteredSigns" :title="'Другие знаки в Зороастрийском гороскопе'" :horoscopeType="'zoroastrian'"></CheckSign>
  <ZodiacListwTitle></ZodiacListwTitle>
  <OtherEastwTitle :zaroastrian="true"></OtherEastwTitle>
  <OtherSection></OtherSection>
</template>