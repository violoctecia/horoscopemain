<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import DescriptionDate from "@/components/chineseComponents/DescriptionDate.vue";
import HoroscopePageDescSign from "@/components/chineseComponents/HoroscopePageDescSign.vue";
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import CheckDescSign from "@/components/chineseComponents/CheckDescSign.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import CheckDescElement from "@/components/chineseComponents/CheckDescElement.vue";
import OtherEastwTitle from "@/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";


// Получение параметра даты из маршрута
const route = useRoute();
const rawDate = ref(route.params.date);

// Функция для определения стихии по году рождения
const determineElement = (year) => {
  const lastDigit = year % 10;

  if (lastDigit === 0 || lastDigit === 1) {
    return 'Вода';
  } else if (lastDigit === 2 || lastDigit === 3) {
    return 'Металл';
  } else if (lastDigit === 4 || lastDigit === 5) {
    return 'Дерево';
  } else if (lastDigit === 6 || lastDigit === 7) {
    return 'Огонь';
  } else {
    return 'Земля';
  }
};

// Определение знака и стихии по году рождения
const determineSignAndElement = (year) => {
  // Определение начала текущего цикла стихий
  const startYearOfCycle = 1984;
  const yearsInCycle = 28;
  const currentYearInCycle = (year - startYearOfCycle) % yearsInCycle;

  // Определение стихии для текущего года
  const elements = ['Дерево', 'Огонь', 'Земля', 'Металл', 'Вода'];
  const currentElementIndex = Math.floor(currentYearInCycle / 2) % 5;
  const currentElement = elements[currentElementIndex];

  // Определение знака по году
  const signs = ['Крыса', 'Бык', 'Тигр', 'Кролик', 'Дракон', 'Змея', 'Лошадь', 'Коза', 'Обезьяна', 'Петух', 'Собака', 'Свинья'];
  const signIndex = (year - 1900) % 12;
  const sign = signs[signIndex];

  // Определение стихии по году
  const element = determineElement(year);

  return { sign, element };
};

// Извлечение года из даты
const extractYearFromDate = (dateString) => {
  const [, , year] = dateString.split('-').map(Number);
  return year;
};

// Инициализация переменной для отображения данных
const date = ref({ year: null, sign: null, element: null });

// Извлечение года из полученной даты и определение знака и стихии
const year = extractYearFromDate(rawDate.value);
const { sign, element } = determineSignAndElement(year);
date.value = { year, sign, element };

const signButtons = ref([
  { ru: 'Крыса', en: 'rat' },
  { ru: 'Бык', en: 'ox' },
  { ru: 'Тигр', en: 'tiger' },
  { ru: 'Кролик', en: 'rabbit' },
  { ru: 'Дракон', en: 'dragon' },
  { ru: 'Змея', en: 'snake' },
  { ru: 'Лошадь', en: 'horse' },
  { ru: 'Коза', en: 'goat' },
  { ru: 'Обезьяна', en: 'monkey' },
  { ru: 'Петух', en: 'rooster' },
  { ru: 'Собака', en: 'dog' },
  { ru: 'Свинья', en: 'pig' }
]);
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/chinese">Китайский гороскоп</router-link>
      <router-link :to="`/horoscope/chinese/date/${rawDate}`">Гороскоп по дате рождения: {{ rawDate }}</router-link>
    </template>
  </PageLinks>
  <DescriptionDate :sign="date.sign" :year="rawDate" :element="date.element"></DescriptionDate>
  <HoroscopePageDescSign :sign="date.sign" :element="date.element"></HoroscopePageDescSign>
  <CheckDescSign :horoscopeType="'chinese'" :signs="signButtons" :title="'Другие знаки в Китайском гороскопе'" :mb="64"></CheckDescSign>
  <CheckDescElement  :title="'Другие стихии в Китайском гороскопе'"></CheckDescElement>
  <ZodiacListwTitle></ZodiacListwTitle>
  <OtherEastwTitle :chinese="true"></OtherEastwTitle>
  <OtherSection></OtherSection>
</template>