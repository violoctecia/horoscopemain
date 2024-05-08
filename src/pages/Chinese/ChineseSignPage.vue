<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import CheckDate from "@/components/globalHoroscopesComponent/CheckDate.vue";
import CheckDescSign from "@/components/chineseComponents/CheckDescSign.vue";
import DescriptionSign from "@/components/chineseComponents/DescriptionSign.vue";
import {useRoute} from "vue-router";
import {ref, watch} from 'vue';


const route = useRoute();
const sign = ref(route.params.sign)

watch(
    () => route.params.sign,
    (newSign) => {
      sign.value = newSign;
    }
);



import rat from "@/assets/svg_chinese_n_japanese/rat.vue";
import dog from "@/assets/svg_chinese_n_japanese/dog.vue";
import ox from "@/assets/svg_chinese_n_japanese/ox.vue";
import tiger from "@/assets/svg_chinese_n_japanese/tiger.vue";
import rabbit from "@/assets/svg_chinese_n_japanese/rabbit.vue";
import dragon from "@/assets/svg_chinese_n_japanese/dragon.vue";
import snake from "@/assets/svg_chinese_n_japanese/snake.vue";
import horse from "@/assets/svg_chinese_n_japanese/horse.vue";
import goat from "@/assets/svg_chinese_n_japanese/goat.vue";
import monkey from "@/assets/svg_chinese_n_japanese/monkey.vue";
import rooster from "@/assets/svg_chinese_n_japanese/rooster.vue";
import pig from "@/assets/svg_chinese_n_japanese/pig.vue";



const signs = {
  rat: {
    description: "Крыса - умная и сообразительная. Она обладает острым умом и быстрым мышлением. Крыса всегда готова к новым вызовам и приключениям.",
    image: rat,
    translation: {ru: 'Крыса', en: 'rat'}
  },
  ox: {
    description: "Бык - надежный и выносливый. Он обладает силой и стойкостью. Бык ценит труд и готов преодолевать любые трудности.",
    image: ox,
    translation: {ru: 'Бык', en: 'ox'}
  },
  tiger: {
    description: "Тигр - смелый и мощный. Он обладает сильным характером и решительностью. Тигр всегда стремится к своим целям и не боится трудностей.",
    image: tiger,
    translation: {ru: 'Тигр', en: 'tiger'}
  },
  rabbit: {
    description: "Кролик - дружелюбный и восприимчивый. Он обладает тонким чувством и добротой. Кролик ценит гармонию и мир вокруг себя.",
    image: rabbit,
    translation: {ru: 'Кролик', en: 'rabbit'}
  },
  dragon: {
    description: "Дракон - могущественный и властный. Он обладает силой и энергией. Дракон готов преодолеть любые препятствия на пути к своей цели.",
    image: dragon,
    translation: {ru: 'Дракон', en: 'dragon'}
  },
  snake: {
    description: "Змея - хитрая и интуитивная. Она обладает тонким умом и глубокой мудростью. Змея всегда идет к своей цели с уверенностью и решимостью.",
    image: snake,
    translation: {ru: 'Змея', en: 'snake'}
  },
  horse: {
    description: "Лошадь - свободолюбивая и страстная. Она обладает энергией и решимостью. Лошадь ценит свободу и не терпит ограничений.",
    image: horse,
    translation: {ru: 'Лошадь', en: 'horse'}
  },
  goat: {
    description: "Коза - мягкая и творческая. Она обладает чувствительным сердцем и воображением. Коза ценит красоту и гармонию вокруг себя.",
    image: goat,
    translation: {ru: 'Коза', en: 'goat'}
  },
  monkey: {
    description: "Обезьяна - энергичная и умная. Она обладает острым умом и находчивостью. Обезьяна всегда находит выход из любой ситуации и умеет вдохновлять окружающих.",
    image: monkey,
    translation: {ru: 'Обезьяна', en: 'monkey'}
  },
  rooster: {
    description: "Петух - уверенный и энергичный. Он обладает яркой индивидуальностью и харизмой. Петух всегда готов привести людей к своей цели и вдохновить их своими действиями.",
    image: rooster,
    translation: {ru: 'Петух', en: 'rooster'}
  },
  dog: {
    description: "Собака - преданный и верный. Она обладает добрым сердцем и высокими моральными принципами. Собака всегда готова помочь тем, кого она любит.",
    image: dog,
    translation: {ru: 'Собака', en: 'dog'}
  },
  pig: {
    description: "Свинья - добрая и общительная. Она обладает чувством юмора и дружелюбием. Свинья ценит простые радости жизни и любит находиться в кругу семьи и друзей.",
    image: pig,
    translation: {ru: 'Свинья', en: 'pig'}
  }
};
const translations = Object.values(signs).map(sign => sign.translation);
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/chinese">Китайский гороскоп</router-link>
      <router-link :to="`/horoscope/chinese/sign/${sign}`">{{signs[sign].translation.ru}}</router-link>
    </template>
  </PageLinks>
  <DescriptionSign :sign="signs[sign]"></DescriptionSign>
  <CheckDate :horoscopeType="'chinese'" :title="'Китайский гороскоп'" :mb="40"></CheckDate>
  <CheckDescSign :signs="translations" :horoscopeType="'chinese'" :title="'Описание знаков в Китайском гороскопе'"></CheckDescSign>

</template>

<style scoped>

</style>