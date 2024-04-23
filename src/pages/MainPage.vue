<script setup>
import MainHeader from "@/components/MainHeader.vue";
import MainSection from "@/components/MainSection.vue";
</script>

<template>
  <MainHeader></MainHeader>
  <MainSection></MainSection>
</template>

<style>
.container {
  max-width: 1056px;
  margin: 0 auto;
}
@media (max-width: 1200px) {
  .container {
    max-width: none;
    padding: 0 24px;
  }
}
</style>
