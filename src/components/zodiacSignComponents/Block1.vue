<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
const sign = route.params.sign;

import icon1 from "@/assets/svg_zodiacs/1.vue";
import icon2 from "@/assets/svg_zodiacs/2.vue";
import icon3 from "@/assets/svg_zodiacs/3.vue";
import icon4 from "@/assets/svg_zodiacs/4.vue";
import icon5 from "@/assets/svg_zodiacs/5.vue";
import icon6 from "@/assets/svg_zodiacs/6.vue";
import icon7 from "@/assets/svg_zodiacs/7.vue";
import icon8 from "@/assets/svg_zodiacs/8.vue";
import icon9 from "@/assets/svg_zodiacs/9.vue";
import icon10 from "@/assets/svg_zodiacs/10.vue";
import icon11 from "@/assets/svg_zodiacs/11.vue";
import icon12 from "@/assets/svg_zodiacs/12.vue";
import SocialLinks from "@/components/globalComponents/SocialLinks.vue";

const zodiacInfo = {
  oven: {
    title: "Гороскоп для Овна",
    description:
        "Овен — прирождённый лидер. Смелый, решительный и энергичный, он всегда стремится быть первым во всём. Овен не боится трудностей и готов к любым испытаниям. Он обладает сильным характером и не терпит поражений.",
    image: icon1,
  },
  taurus: {
    title: "Гороскоп для Тельца",
    description:
        "Телец — практичный и надежный. Он оценивает комфорт и качество жизни выше всего. Телец умеет ценить простые радости жизни и всегда стремится к гармонии.",
    image: icon2,
  },
  gemini: {
    title: "Гороскоп для Близнецов",
    description:
        "Близнецы — общительные и любознательные. Они легко адаптируются к новым ситуациям и любят общаться с разными людьми. Близнецы обладают острым умом и быстрым мышлением.",
    image: icon3,
  },
  cancer: {
    title: "Гороскоп для Рака",
    description:
        "Рак — заботливый и чувствительный. Он ценит семью и домашний уют выше всего. Рак обладает хорошей интуицией и часто действует под влиянием эмоций.",
    image: icon4,
  },
  leo: {
    title: "Гороскоп для Льва",
    description:
        "Лев — страстный и уверенный в себе. Он обожает быть в центре внимания и стремится к успеху. Лев умеет вдохновлять окружающих своим энтузиазмом и оптимизмом.",
    image: icon5,
  },
  virgo: {
    title: "Гороскоп для Девы",
    description:
        "Дева — практичная и аналитичная. Она обладает острым умом и внимательным взглядом к деталям. Дева стремится к совершенству и следует принципам порядка и чистоты.",
    image: icon6,
  },
  libra: {
    title: "Гороскоп для Весов",
    description:
        "Весы — справедливые и дипломатичные. Они ценят гармонию и равновесие во всем. Весы стремятся к справедливости и умеют находить компромиссы в конфликтных ситуациях.",
    image: icon7,
  },
  scorpio: {
    title: "Гороскоп для Скорпиона",
    description:
        "Скорпион — страстный и мощный. Он обладает сильным характером и глубокими чувствами. Скорпион не боится трудностей и всегда идет к своей цели.",
    image: icon8,
  },
  sagittarius: {
    title: "Гороскоп для Стрельца",
    description:
        "Стрелец — оптимистичный и энергичный. Он любит свободу и приключения. Стрелец стремится к познанию мира и постоянно ищет новые возможности.",
    image: icon9,
  },
  capricorn: {
    title: "Гороскоп для Козерога",
    description:
        "Козерог — целеустремленный и практичный. Он обладает стойкостью и выносливостью. Козерог стремится к достижению своих целей и готов преодолевать препятствия на пути к успеху.",
    image: icon10,
  },
  aquarius: {
    title: "Гороскоп для Водолея",
    description:
        "Водолей — оригинальный и инновационный. Он обладает ярким умом и независимым характером. Водолей стремится к переменам и идеям, которые меняют мир.",
    image: icon11,
  },
  pisces: {
    title: "Гороскоп для Рыб",
    description:
        "Рыбы — интуитивные и чувствительные. Они обладают глубоким воображением и творческим мышлением. Рыбы стремятся к гармонии и пониманию в мире.",
    image: icon12,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <component :is="zodiacInfo[sign].image" class="img"></component>
        <h1 class="title">{{ zodiacInfo[sign].title }}</h1>

        <p class="desc">{{ zodiacInfo[sign].description }}</p>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img {
  border-radius: 49px;
  padding: 12px;
  width: 96px;
  height: 96px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-select);
}

.wrapper {
  border: 1px solid var(--dark-main-80);
  border-radius: 40px;
  padding: 40px 48px;
  background: var(--dark-main);
  position: relative;
}

h1 {
  text-align: start;
  margin-bottom: 24px;
}

@media (max-width: 1100px) {
  .wrapper {
    border-radius: 16px;
    padding: 24px;
  }

  .img {
    width: 64px;
    height: 64px;
    margin-bottom: 12px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  h1 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
  }


}
</style>
