<script setup>
import {useRoute} from "vue-router";
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

const props = defineProps({
  dateInfo: Object,
});

const route = useRoute();
const sign = route.params.sign;

const zodiacInfo = {
  oven: {
    description:
        "Овен — прирождённый лидер. Смелый, решительный и энергичный, он всегда стремится быть первым во всём. Овен не боится трудностей и готов к любым испытаниям. Он обладает сильным характером и не терпит поражений. Овен также обычно обладает высоким уровнем энергии и любит действовать вне зависимости от обстоятельств.",
    image: icon1,
  },
  taurus: {
    description:
        "Телец — практичный и надежный. Он оценивает комфорт и качество жизни выше всего. Телец умеет ценить простые радости жизни и всегда стремится к гармонии. Телец также часто обладает устойчивым характером и стремится к стабильности в своей жизни.",
    image: icon2,
  },
  gemini: {
    description:
        "Близнецы — общительные и любознательные. Они легко адаптируются к новым ситуациям и любят общаться с разными людьми. Близнецы обладают острым умом и быстрым мышлением. Они также могут быть непостоянными и часто меняют свои интересы и предпочтения.",
    image: icon3,
  },
  cancer: {
    description:
        "Рак — заботливый и чувствительный. Он ценит семью и домашний уют выше всего. Рак обладает хорошей интуицией и часто действует под влиянием эмоций. Он также обычно обладает защитническими качествами и заботится о благополучии своих близких.",
    image: icon4,
  },
  leo: {
    description:
        "Лев — страстный и уверенный в себе. Он обожает быть в центре внимания и стремится к успеху. Лев умеет вдохновлять окружающих своим энтузиазмом и оптимизмом. Он также обладает лидерскими качествами и часто берет на себя руководящие роли.",
    image: icon5,
  },
  virgo: {
    description:
        "Дева — практичная и аналитичная. Она обладает острым умом и внимательным взглядом к деталям. Дева стремится к совершенству и следует принципам порядка и чистоты. Она также обычно организована и эффективно управляет своим временем и ресурсами.",
    image: icon6,
  },
  libra: {
    description:
        "Весы — справедливые и дипломатичные. Они ценят гармонию и равновесие во всем. Весы стремятся к справедливости и умеют находить компромиссы в конфликтных ситуациях. Они также часто обладают хорошими коммуникативными навыками и могут улаживать споры и конфликты.",
    image: icon7,
  },
  scorpio: {
    description:
        "Скорпион — страстный и мощный. Он обладает сильным характером и глубокими чувствами. Скорпион не боится трудностей и всегда идет к своей цели. Он также обычно обладает стратегическим мышлением и умеет планировать свои действия.",
    image: icon8,
  },
  sagittarius: {
    description:
        "Стрелец — оптимистичный и энергичный. Он любит свободу и приключения. Стрелец стремится к познанию мира и постоянно ищет новые возможности. Он также обычно обладает стремлением к росту и саморазвитию.",
    image: icon9,
  },
  capricorn: {
    description:
        "Козерог — целеустремленный и практичный. Он обладает стойкостью и выносливостью. Козерог стремится к достижению своих целей и готов преодолевать препятствия на пути к успеху. Он также обычно обладает дисциплинированным характером и умеет трудиться настойчиво.",
    image: icon10,
  },
  aquarius: {
    description:
        "Водолей — оригинальный и инновационный. Он обладает ярким умом и независимым характером. Водолей стремится к переменам и идеям, которые меняют мир. Он также часто бывает непредсказуемым и имеет свой уникальный подход к жизни.",
    image: icon11,
  },
  pisces: {
    description:
        "Рыбы — интуитивные и чувствительные. Они обладают глубоким воображением и творческим мышлением. Рыбы стремятся к гармонии и пониманию в мире. Они также обычно обладают способностью к эмпатии и умеют понимать чувства других людей.",
    image: icon12,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <component :is="zodiacInfo[sign].image" class="img"></component>
        <h1 class="title">
          {{ props.dateInfo.russianDate + props.dateInfo.genitiveCase }}
        </h1>

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
