<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import TitleSection from "@/components/globalComponents/TitleSection.vue";
import CheckDate from "@/components/globalHoroscopesComponent/CheckDate.vue";
import CheckDescSign from "@/components/chineseComponents/CheckDescSign.vue";
import CheckDescElement from "@/components/chineseComponents/CheckDescElement.vue";


import {ref} from 'vue';
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import OtherEastwTitle from "@/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";
import WhatIsChinese from "@/components/chineseComponents/WhatIsChinese.vue";


const signs = ref([
  {ru: 'Крыса', en: 'rat'},
  {ru: 'Бык', en: 'ox'},
  {ru: 'Тигр', en: 'tiger'},
  {ru: 'Кролик', en: 'rabbit'},
  {ru: 'Дракон', en: 'dragon'},
  {ru: 'Змея', en: 'snake'},
  {ru: 'Лошадь', en: 'horse'},
  {ru: 'Коза', en: 'goat'},
  {ru: 'Обезьяна', en: 'monkey'},
  {ru: 'Петух', en: 'rooster'},
  {ru: 'Собака', en: 'dog'},
  {ru: 'Свинья', en: 'pig'}
]);

</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/chinese">Китайский гороскоп</router-link>
    </template>
  </PageLinks>
  <TitleSection></TitleSection>
  <CheckDate :horoscopeType="'chinese'" :title="'Китайский гороскоп'"></CheckDate>

  <CheckDescSign :signs="signs" :horoscopeType="'chinese'" :title="'Описание знаков в Китайском гороскопе'" :mb="64"></CheckDescSign>
  <CheckDescElement :title="'Описание стихий в Китайском гороскопе'"></CheckDescElement>
  <WhatIsChinese></WhatIsChinese>
  <CheckDate :horoscopeType="'chinese'" :title="'Китайский гороскоп'"></CheckDate>
  <ZodiacListwTitle></ZodiacListwTitle>
  <OtherEastwTitle :chinese="true"></OtherEastwTitle>
  <OtherSection></OtherSection>
</template>

<style scoped>

</style>