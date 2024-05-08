<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import Block1 from "@/components/zodiacSignComponents/Block1.vue";
import Block2 from "@/components/zodiacSignComponents/Block2.vue";
import Block3 from "@/components/zodiacSignComponents/Block3.vue";
import Block4 from "@/components/zodiacSignComponents/BlockCelebrity.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";

import { useRoute } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const route = useRoute();
const sign = route.params.sign;

const signNames = {
  oven: "Овен",
  taurus: "Телец",
  gemini: "Близнецы",
  cancer: "Рак",
  leo: "Лев",
  virgo: "Дева",
  libra: "Весы",
  scorpio: "Скорпион",
  sagittarius: "Стрелец",
  capricorn: "Козерог",
  aquarius: "Водолей",
  pisces: "Рыбы",
};

const russianSign = signNames[sign] || sign;

const popupVisible = ref(true);

const router = useRouter();

const checkScrollPosition = () => {
  popupVisible.value =
    window.pageYOffset <
    document.documentElement.scrollHeight - window.innerHeight - 200;
};

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition);

  checkScrollPosition();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});

// Переходы по датам
const selectedDate = ref(null);

const goToSelectedHoroscope = () => {
  if (selectedDate.value) {
    goToHoroscope(selectedDate.value);
  }
};

const goToHoroscope = (period) => {
  const sign = route.params.sign;

  const horoscopePath = `/horoscope/zodiac/${sign}/${period}`;

  router.push(horoscopePath);
};
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/zodiac">Зодиакальный гороскоп</router-link>
      <router-link :to="`/horoscope/zodiac/${sign}`">{{
        russianSign
      }}</router-link>
    </template>
  </PageLinks>

  <Block1></Block1>
  <Block2></Block2>
  <Block3></Block3>
  <Block4></Block4>
  <EastSection></EastSection>
  <OtherSection></OtherSection>

  <div class="popup" :class="{ show: popupVisible }">
    <p>Выберите период:</p>
    <div class="select">
      <button
        :class="{ active: selectedDate === 'today' }"
        @click="selectedDate = 'today'"
      >
        Сегодня
      </button>
      <button
        :class="{ active: selectedDate === 'tomorrow' }"
        @click="selectedDate = 'tomorrow'"
      >
        Завтра
      </button>
      <button
        :class="{ active: selectedDate === 'weekly' }"
        @click="selectedDate = 'weekly'"
      >
        Неделя
      </button>
      <button
        :class="{ active: selectedDate === 'monthly' }"
        @click="selectedDate = 'monthly'"
      >
        Месяц
      </button>
    </div>
    <button class="read btn_hover" @click="goToSelectedHoroscope">
      Читать гороскоп
    </button>
  </div>
</template>

<style scoped>
.popup.show {
  opacity: 1;
  z-index: 50;
}
.popup {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);

  width: 960px;
  padding: 32px;
  border: 1px solid var(--dark-select);
  border-radius: 24px;
  backdrop-filter: blur(24px);
  background: linear-gradient(
    71deg,
    rgba(130, 130, 131, 0.2) 0%,
    rgba(232, 232, 233, 0.2) 100%
  );

  display: flex;
  justify-content: space-between;
  align-items: center;

  opacity: 0;
  z-index: -1;
  transition: opacity 0.5s ease-in-out;
  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
    color: #fff;
  }

  .select {
    width: 425px;
    display: flex;
    gap: 8px;
    align-items: center;

    button {
      border: 1px solid var(--dark-select-40);
      border-radius: 26px;
      padding: 8px 20px;
      background: none;

      font-weight: 500;
      font-size: 17px;
      line-height: 165%;
      color: var(--dark-select-10);
    }
    button:hover {
      border: 1px solid var(--yellow);
      background: var(--yellow);
      color: var(--dark-select);
    }
    button.active {
      border: 1px solid var(--yellow);
      background: var(--yellow);
      color: var(--dark-select);
    }
  }

  .read {
    border-radius: 20px;
    padding: 14px 24px;
    width: 199px;
    background: var(--yellow);

    font-weight: 500;
    font-size: 19px;
    line-height: 147%;
    text-align: center;
    color: var(--dark-select);
    opacity: 0.87;
  }
}
@media (max-width: 1100px) {
  .popup {
    width: calc(100vw - 32px);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;

    p {
      font-size: 15px;
      line-height: 160%;
      width: min-content;
    }

    .select {
      width: auto;
      display: flex;
      justify-content: center;
      gap: 8px;
      align-items: center;

      button {
        border: 1px solid var(--dark-select-40);
        border-radius: 26px;
        padding: 8px 20px;
        background: none;

        font-weight: 500;
        font-size: 13px;
        line-height: 169%;
        color: var(--dark-select-10);
      }
    }
  }
}

@media (max-width: 800px) {
  .popup {
    width: calc(100vw - 32px);
    padding: 16px;
    gap: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(112px);
    box-shadow: 0 8px 24px 0 #000;
    background: linear-gradient(
      71deg,
      rgba(130, 130, 131, 0.2) 0%,
      rgba(232, 232, 233, 0.2) 100%
    );
    p {
      text-align: center;
      margin-bottom: 12px;
      width: 100%;
    }

    .select {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 32px;
      button {
        border: 1px solid var(--dark-select-40);
        border-radius: 123px;
        padding: 8px 12px;
        background: none;
        width: calc(33% - 8px);
      }
    }

    .read {
      width: 100%;
      border-radius: 20px;
      padding: 14px 24px;

      background: var(--yellow);

      font-weight: 500;
      font-size: 19px;
      line-height: 147%;
      text-align: center;
      color: var(--dark-select);
      opacity: 0.87;
    }
  }
}
@media (max-width: 380px) {
  .popup {
    .select {
      flex-wrap: wrap;
      button {
        width: calc(50% - 8px);
      }
    }
  }
}

@media (max-width: 1100px) and (max-height: 700px) {
  .popup {
    bottom: 10px;
    .select {
      margin-bottom: 16px;
    }
  }
  .read {
    padding: 8px 24px;
  }
}
</style>
