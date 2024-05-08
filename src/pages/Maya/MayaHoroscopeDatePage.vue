<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import { mayaSigns } from "@/pages/Maya/maya.js";
import DateInfo from "@/components/globalHoroscopesComponent/DateInfo.vue";
import { shallowRef } from 'vue';
import DateDescSign from "@/components/globalHoroscopesComponent/DateDescSign.vue";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";

const signs = shallowRef(mayaSigns);
const route = useRoute();
const rawDate = ref(route.params.date);

// Функция для определения знака майя по дате рождения
function getMayaSign(date) {
  // Получаем номер дня в году для заданной даты
  const dayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  // Определяем номер дня Цолькина
  const tzolkinDay = dayOfYear(date) % 260;

  // Определяем номер знака Майя по номеру дня Цолькина
  const signIndex = (tzolkinDay - 1) % 20;

  // Возвращаем название знака Майя для заданной даты
  return signs.value[signIndex]?.ru || '';
}

// Создаем реактивную переменную для хранения знака Майя
const mayaSign = ref('');

// Следим за изменениями в строке даты и обновляем знак Майя
watchEffect(() => {
  const date = new Date(rawDate.value);
  mayaSign.value = getMayaSign(date);
});
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/maya">Гороскоп Майя</router-link>
      <router-link :to="`/horoscope/maya/date/${rawDate}`">Гороскоп по дате рождения: {{ rawDate }}</router-link>
    </template>
  </PageLinks>

  <DateInfo :title="'Майя'" :sign="mayaSign" :year="rawDate"></DateInfo>
  <DateDescSign :sign="mayaSign" :signsData="signs"></DateDescSign>
  <CheckSign :signsData="signs" :title="'Другие знаки в гороскопе Майя'" :horoscopeType="'maya'"></CheckSign>

</template>