<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import DescriptionElement from "@/components/chineseComponents/DescriptionElement.vue";
import CheckDate from "@/components/globalHoroscopesComponent/CheckDate.vue";
import {useRoute} from "vue-router";
import {ref, watch} from 'vue';

const route = useRoute();

const element = ref(route.params.element)


watch(
    () => route.params.element,
    (newElement) => {
      element.value = newElement;
    }
);

import water from "@/assets/svg_elements_chinese/water.vue"
import fire from "@/assets/svg_elements_chinese/fire.vue"
import metal from "@/assets/svg_elements_chinese/metal.vue"
import wood from "@/assets/svg_elements_chinese/wood.vue"
import earth from "@/assets/svg_elements_chinese/earth.vue"
import CheckDescElement from "@/components/chineseComponents/CheckDescElement.vue";

const elements = {
  water: {
    description: "Вода - представляет глубокие чувства и интуицию. Она символизирует гибкость и способность приспосабливаться к изменениям.",
    image: water,
    translation: {ru: 'Вода', en: 'water'}
  },
  fire: {
    description: "Огонь - символизирует страсть и энергию. Он представляет силу и смелость, способность к действиям и инициативе.",
    image: fire,
    translation: {ru: 'Огонь', en: 'fire'}
  },
  metal: {
    description: "Железо - обозначает силу и стойкость. Он символизирует устойчивость, надежность и упорство в достижении целей.",
    image: metal,
    translation: {ru: 'Железо', en: 'metal'}
  },
  wood: {
    description: "Дерево - символизирует рост и развитие. Оно обозначает уверенность, жизненную силу и способность к адаптации.",
    image: wood,
    translation: {ru: 'Дерево', en: 'wood'}
  },
  earth: {
    description: "Земля - представляет стабильность и плодородие. Она символизирует надежность, уравновешенность и практичность.",
    image: earth,
    translation: {ru: 'Земля', en: 'earth'}
  },
};
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/chinese">Китайский гороскоп</router-link>
      <router-link :to="`/horoscope/chinese/element/${element}`">{{ elements[element].translation.ru }}</router-link>
    </template>
  </PageLinks>
  <DescriptionElement :element="elements[element]"></DescriptionElement>
  <CheckDate :horoscopeType="'chinese'" :title="'Китайский гороскоп'" :mb="40"></CheckDate>
  <CheckDescElement :title="'Описание стихий в Китайском гороскопе'"></CheckDescElement>
</template>

<style scoped>

</style>