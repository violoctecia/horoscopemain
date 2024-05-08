<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import MainSection from "@/components/zodiacComponents/MainSection.vue";
import ZodiacBlock1 from "@/components/zodiacComponents/ZodiacBlock1.vue";
import ZodiacBlock2 from "@/components/zodiacComponents/ZodiacBlock2.vue";
import ZodiacBlock3 from "@/components/zodiacComponents/ZodiacBlock3.vue";
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/zodiac">Зодиакальный гороскоп</router-link>
    </template>
  </PageLinks>
  <MainSection></MainSection>
  <ZodiacBlock1></ZodiacBlock1>
  <ZodiacBlock2></ZodiacBlock2>
  <ZodiacBlock3></ZodiacBlock3>
</template>

<style scoped></style>
