<script setup>
import SocialLinks from "@/components/globalComponents/SocialLinks.vue";

const props = defineProps({
  year: String,
  sign: String,
  element: String,
});

// Объект с соответствиями знака и стихии полному названию
const signElementNames = {
  'Крыса': {
    'Вода': 'Водяной Крысы',
    'Огонь': 'Огненной Крысы',
    'Земля': 'Земляной Крысы',
    'Металл': 'Металлической Крысы',
    'Дерево': 'Деревянной Крысы'
  },
  'Бык': {
    'Вода': 'Водяного Быка',
    'Огонь': 'Огненного Быка',
    'Земля': 'Земляного Быка',
    'Металл': 'Металлического Быка',
    'Дерево': 'Деревянного Быка'
  },
  'Тигр': {
    'Вода': 'Водяного Тигра',
    'Огонь': 'Огненного Тигра',
    'Земля': 'Земляного Тигра',
    'Металл': 'Металлического Тигра',
    'Дерево': 'Деревянного Тигра'
  },
  'Кролик': {
    'Вода': 'Водяного Кролика',
    'Огонь': 'Огненного Кролика',
    'Земля': 'Земляного Кролика',
    'Металл': 'Металлического Кролика',
    'Дерево': 'Деревянного Кролика'
  },
  'Дракон': {
    'Вода': 'Водяного Дракона',
    'Огонь': 'Огненного Дракона',
    'Земля': 'Земляного Дракона',
    'Металл': 'Металлического Дракона',
    'Дерево': 'Деревянного Дракона'
  },
  'Змея': {
    'Вода': 'Водяной Змеи',
    'Огонь': 'Огненной Змеи',
    'Земля': 'Земляной Змеи',
    'Металл': 'Металлической Змеи',
    'Дерево': 'Деревянной Змеи'
  },
  'Лошадь': {
    'Вода': 'Водяной Лошади',
    'Огонь': 'Огненной Лошади',
    'Земля': 'Земляной Лошади',
    'Металл': 'Металлической Лошади',
    'Дерево': 'Деревянной Лошади'
  },
  'Коза': {
    'Вода': 'Водяной Козы',
    'Огонь': 'Огненной Козы',
    'Земля': 'Земляной Козы',
    'Металл': 'Металлической Козы',
    'Дерево': 'Деревянной Козы'
  },
  'Обезьяна': {
    'Вода': 'Водяной Обезьяны',
    'Огонь': 'Огненной Обезьяны',
    'Земля': 'Земляной Обезьяны',
    'Металл': 'Металлической Обезьяны',
    'Дерево': 'Деревянной Обезьяны'
  },
  'Петух': {
    'Вода': 'Водяного Петуха',
    'Огонь': 'Огненного Петуха',
    'Земля': 'Земляного Петуха',
    'Металл': 'Металлического Петуха',
    'Дерево': 'Деревянного Петуха'
  },
  'Собака': {
    'Вода': 'Водяной Собаки',
    'Огонь': 'Огненной Собаки',
    'Земля': 'Земляной Собаки',
    'Металл': 'Металлической Собаки',
    'Дерево': 'Деревянной Собаки'
  },
  'Свинья': {
    'Вода': 'Водяной Свиньи',
    'Огонь': 'Огненной Свиньи',
    'Земля': 'Земляной Свиньи',
    'Металл': 'Металлической Свиньи',
    'Дерево': 'Деревянной Свиньи'
  }
};

const getFullSignName = (sign, element) => {
  if (signElementNames.hasOwnProperty(sign) && signElementNames[sign].hasOwnProperty(element)) {
    return signElementNames[sign][element];
  } else {
    return `${element} ${sign}`;
  }
};
</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <component :is="props.sign.image" class="img"></component>
        <h1 class="title">Китайский гороскоп {{ getFullSignName(props.sign, props.element) }}</h1>
        <div class="info_wrapper">

          <p class="desc">Дата рождения: {{ props.year }}</p>
          <p class="desc">Знак: {{ props.sign }}</p>
          <p class="desc">Стихия: {{ props.element }}</p>
        </div>

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
  max-width: 700px;
}

.info_wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
    margin-bottom: 16px;
  }


  .info_wrapper {
    gap: 6px;
    margin-bottom: 16px;

    p {
      font-size: 13px;
    }
  }

}
</style>