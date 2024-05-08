<script setup>
import { useRoute } from "vue-router";

// Получаем маршрут
const route = useRoute();

// Получаем параметр 'sign' из маршрута
const sign = route.params.sign;

// Создаем объект с краткими и уникальными описаниями о знаках зодиака
const zodiacInfo = {
  oven: {
    description:
      "Овен – энергичный воин, всегда готовый к новым вызовам и победам.",
  },
  taurus: {
    description:
      "Телец – упорный и надежный, он стремится к стабильности и уюту.",
  },
  gemini: {
    description:
      "Близнецы – веселые и общительные, они всегда в движении и исследуют мир.",
  },
  cancer: {
    description:
      "Рак – заботливый и чувствительный, он готов защищать своих близких.",
  },
  leo: {
    description:
      "Лев – могучий царь джунглей, привлекающий внимание и вдохновляющий других.",
  },
  virgo: {
    description:
      "Дева – организованный и аналитичный, она стремится к совершенству во всем.",
  },
  libra: {
    description:
      "Весы – гармония и справедливость, они ищут равновесие в отношениях.",
  },
  scorpio: {
    description:
      "Скорпион – загадочный и страстный, он исследует глубины человеческой души.",
  },
  sagittarius: {
    description:
      "Стрелец – свободный искатель приключений, всегда готовый к новым открытиям.",
  },
  capricorn: {
    description:
      "Козерог – целеустремленный властелин, ведущий к вершинам успеха и достижений.",
  },
  aquarius: {
    description:
      "Водолей – свободный дух и инноватор, воплощающий новые идеи в жизнь.",
  },
  pisces: {
    description:
      "Рыбы – мечтательные и чуткие, они плавно плывут в потоке человеческих чувств.",
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="text">
        <h1 class="title">Описание знака</h1>
        <p>{{ zodiacInfo[sign].description }}</p>
      </div>
      <div class="wrapper">
        <div class="block" v-for="index in 12" :key="index">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="32" fill="#111010" />
          </svg>
          <h2>Качество</h2>
          <p>Кардинальный</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text {
  margin-bottom: 64px;

  h1 {
    margin-bottom: 16px;
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 133%;
    text-align: center;
  }
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.block {
  padding: 49px 32px;
  background: var(--dark-select);
  /* max-width: 252px;
  width: 252px;
  min-width: 175px; */
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc(25% - 16px);
  svg {
    margin-bottom: 16px;
  }
  h2 {
    font-weight: 400;
    font-size: 17px;
    line-height: 165%;
    text-align: center;
    color: var(--dark-select-20);
    margin-bottom: 4px;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    color: var(--dark-select-10);
  }
}
@media (max-width: 1100px) {
  .text {
    margin-bottom: 20px;
    p {
      font-weight: 400;
      font-size: 17px;
      line-height: 153%;
      text-align: start;
    }
  }
  .wrapper {
    justify-content: center;
  }
  .block {
    padding: 16px;

    max-width: none;
    min-width: 175px;
    border-radius: 16px;

    svg {
      margin-bottom: 8px;
      width: 48px;
    }
    h2 {
      font-size: 13px;
      line-height: 169%;
      margin-bottom: 2px;
    }
    p {
      font-weight: 500;
      font-size: 15px;
      line-height: 160%;
    }
  }
}
@media (max-width: 800px) {
  .wrapper {
    gap: 8px;
  }
  .block {
    flex-basis: calc(50% - 8px);
    min-width: auto;
  }
}
</style>
