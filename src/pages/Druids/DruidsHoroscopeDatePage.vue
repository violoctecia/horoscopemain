<script setup>
import {ref, watchEffect} from 'vue';
import {useRoute} from 'vue-router';
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import DateInfo from "@/components/globalHoroscopesComponent/DateInfo.vue";
import DateDescSign from "@/components/globalHoroscopesComponent/DateDescSign.vue";
import {druidSigns} from "@/pages/Druids/druids.js"
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherOtherwTitle from "@/components/globalComponents/OtherOtherwTitle.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";

const signs = druidSigns;
const route = useRoute();
const rawDate = ref(route.params.date);

// Функция для извлечения дня и месяца из даты
const extractMonthAndDayFromDate = (dateString) => {
  const [day, month] = dateString.split('-').map(Number);
  return {day, month};
};

const signDates = {
  'Береза': [
    {start: '24-06', end: '24-06'},
  ],
  'Вяз': [
    {start: '12-01', end: '24-01'},
    {start: '15-07', end: '25-07'}
  ],
  'Бук': [
    {start: '21-12', end: '22-12'},
  ],
  'Граб': [
    {start: '04-06', end: '13-06'},
    {start: '02-12', end: '11-12'}
  ],
  'Дуб': [
    {start: '21-03', end: '21-03'},
  ],
  'Жасмин': [
    {start: '01-05', end: '14-05'},
    {start: '03-11', end: '11-11'}
  ],
  'Ива': [
    {start: '01-03', end: '10-03'},
    {start: '03-09', end: '12-09'}
  ],
  'Инжир': [
    {start: '14-06', end: '23-06'},
    {start: '12-12', end: '21-12'}
  ],
  'Картас': [
    {start: '09-02', end: '18-02'},
    {start: '14-08', end: '23-08'}
  ],
  'Каштан': [
    {start: '15-05', end: '24-05'},
    {start: '12-11', end: '21-11'}
  ],
  'Кипарис': [
    {start: '25-01', end: '03-02'},
    {start: '26-07', end: '04-08'}
  ],
  'Клен': [
    {start: '11-04', end: '20-04'},
    {start: '14-10', end: '23-10'}
  ],
  'Липа': [
    {start: '11-03', end: '20-03'},
    {start: '13-09', end: '22-09'}
  ],
  'Маслина': [
    {start: '23-09', end: '23-09'},
  ],
  'Орех': [
    {start: '21-04', end: '30-04'},
    {start: '24-10', end: '02-11'}
  ],
  'Орешник': [
    {start: '22-03', end: '31-03'},
    {start: '24-09', end: '03-10'}
  ],
  'Пихта': [
    {start: '02-01', end: '11-01'},
    {start: '05-07', end: '14-07'}
  ],
  'Рябина': [
    {start: '01-04', end: '10-04'},
    {start: '04-10', end: '13-10'}
  ],
  'Сосна': [
    {start: '19-02', end: '29-02'},
    {start: '24-08', end: '02-09'}
  ],
  'Тополь': [
    {start: '04-02', end: '08-02'},
    {start: '05-08', end: '13-08'}
  ],
  'Яблоня': [
    {start: '23-12', end: '01-01'},
    {start: '25-06', end: '04-07'}
  ],
  'Ясень': [
    {start: '23-05', end: '03-06'},
    {start: '22-11', end: '01-12'}
  ],
};

// Функция для нахождения знака по дате
function findSignByDate(date) {
  const {day, month} = extractMonthAndDayFromDate(date);

  // Поиск знака по дате
  for (const [sign, dates] of Object.entries(signDates)) {
    for (const {start, end} of dates) {
      const [startDay, startMonth] = start.split('-').map(Number);
      const [endDay, endMonth] = end.split('-').map(Number);
      if ((month === startMonth && day >= startDay) && (month === endMonth && day <= endDay)) {
        return sign;
      }
    }
  }

  return null; // Если знак не найден
}

const dateSign = ref(findSignByDate(rawDate.value)); // Инициализация переменной с знаком по дате

// Следим за изменениями в дате и обновляем знак
watchEffect(() => {
  dateSign.value = findSignByDate(rawDate.value);
});
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/druids">Гороскоп Друидов</router-link>
      <router-link :to="`/horoscope/druids/date/${rawDate}`">Гороскоп по дате рождения: {{ rawDate }}</router-link>
    </template>
  </PageLinks>

  <DateInfo :title="'Гороскоп друидов'" :sign="dateSign" :year="rawDate"></DateInfo>
  <DateDescSign :sign="dateSign" :signsData="signs"></DateDescSign>
  <CheckSign :signsData="druidSigns.filter(sign => sign.ru !== dateSign)"
             :title="'Другие знаки в гороскопе друидов'" :horoscopeType="'druids'"></CheckSign>
  <ZodiacListwTitle></ZodiacListwTitle>
  <EastSection></EastSection>
  <OtherOtherwTitle :druids="true"></OtherOtherwTitle>
</template>