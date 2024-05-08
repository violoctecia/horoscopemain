<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import TitleSection from "@/components/globalHoroscopesComponent/TitleSection.vue";
import CheckDate from "@/components/globalHoroscopesComponent/CheckDate.vue";
import CheckSign from "@/components/globalHoroscopesComponent/CheckSign.vue";
import {mayaSigns} from "@/pages/Maya/maya.js"
import WhatIs from "@/components/globalHoroscopesComponent/WhatIs.vue";
import ZodiacListwTitle from "@/components/globalComponents/ZodiacListwTitle.vue";
import OtherEastwTitle from "@/components/globalComponents/OtherEastwTitle.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";

const signs = mayaSigns;

</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/maya">Гороскоп Майя</router-link>
    </template>
  </PageLinks>
  <TitleSection :title="'Майя'"></TitleSection>
  <CheckDate :horoscopeType="'maya'" :title="'Майя'"></CheckDate>
  <CheckSign :signsData="signs" :title="'Описание знаков в гороскопе Майя'" :horoscopeType="'maya'"></CheckSign>
<!--  <WhatIs :title="'Что такое зароастрийский гороскоп'"-->
<!--          :desc="'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.'"></WhatIs>-->
<!--  <CheckDate :horoscopeType="'zoroastrian'" :title="'Зороастрийский'"></CheckDate>-->
<!--  <ZodiacListwTitle></ZodiacListwTitle>-->
<!--  <OtherEastwTitle :zaroastrian="true"></OtherEastwTitle>-->
<!--  <OtherSection></OtherSection>-->
</template>

