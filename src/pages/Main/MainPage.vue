<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainSection from "./Sections/MainSection.vue";
import ZodiacSection from "./Sections/ZodiacSection.vue";
import EastSection from "./Sections/EastSection.vue";
import OthersSection from "./Sections/OthersSection.vue";
</script>

<template>
  <div class="container">
    <MainHeader></MainHeader>
    <MainSection></MainSection>
    <ZodiacSection></ZodiacSection>
    <EastSection></EastSection>
    <OthersSection></OthersSection>
    <MainFooter></MainFooter>
  </div>
</template>

<style>
.container {
  max-width: 1056px;
  margin: 0 auto;
}
</style>
