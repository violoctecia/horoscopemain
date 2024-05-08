<script setup>
import YellowButton from "@/UI/yellowButton.vue";
import {ref} from "vue";
import {useRouter} from "vue-router"

const router = useRouter();
const activeElement = ref(null);

const props = defineProps({
  title: String,
});


const elements = {
  water: {
    translation: {ru: 'Вода', en: 'water'}
  },
  fire: {

    translation: {ru: 'Огонь', en: 'fire'}
  },
  metal: {

    translation: {ru: 'Железо', en: 'metal'}
  },
  wood: {

    translation: {ru: 'Дерево', en: 'wood'}
  },
  earth: {

    translation: {ru: 'Земля', en: 'earth'}
  },
};

const handleButtonClick = (element) => {
  activeElement.value = element;
  console.log(activeElement.value)
};

const handleYellowButtonClick = () => {
  const Path = `/horoscope/chinese/element/${activeElement.value}`;
  router.push(Path);
};
</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <div class="text">
          <h1>{{props.title}}</h1>
          <p>Выберите знак и узнайте сакральный смысл</p>
        </div>
        <div class="buttons">
          <div class="inner_wrapper">
            <button v-for="element in elements"
                    :key="element.translation.en"

                    @click="handleButtonClick(element.translation.en)"
                    :class="{ active: element.translation.en === activeElement }">
              {{ element.translation.ru }}
            </button>

          </div>
          <YellowButton @click="handleYellowButtonClick">Читать описание</YellowButton>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

.inner_wrapper {
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 12px;
  max-width: 700px;

  button {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.87);
    border-radius: 26px;
    padding: 8px 20px;
    font-weight: 700;
    font-size: 15px;

    color: rgba(255, 255, 255, 0.87);
  }

  button:hover {
    background: var(--yellow-60);
    color: var(--dark-select);
    border: 1px solid var(--yellow-60);
  }

  button.active {
    background: var(--yellow);
    color: var(--dark-select);
    border: 1px solid var(--yellow);
  }
}

.wrapper {
  border: 1px solid var(--dark-main-80);
  border-radius: 40px;
  padding: 40px 48px;
  background: var(--dark-main);
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-weight: 900;
    font-size: 40px;
    line-height: 110%;
    color: var(--dark-select-10);
    max-width: 700px;
  }

  p {
    font-weight: 400;
    font-size: 19px;
    line-height: 147%;
    color: var(--dark-select-20);
  }
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    border: 1px solid rgba(255, 255, 255, 0.87);
    border-radius: 20px;
    padding: 14px 24px;
    width: 312px;
    background: none;
    font-weight: 500;
    font-size: 19px;
    line-height: 147%;
    color: rgba(255, 255, 255, 0.87);
    opacity: 0.87;
  }

}

@media (max-width: 1100px) {
  .wrapper {
    border-radius: 16px;
    padding: 24px;
    gap: 16px;
  }

  .text {

    h1 {
      font-size: 24px;
      line-height: 117%;
    }

    p {
      font-size: 15px;
      line-height: 160%;
    }
  }

  .buttons {
    flex-direction: column;
    gap: 20px;

    input {
      width: 100%;
      font-size: 13px;
      line-height: 169%;
    }


  }
}
</style>
