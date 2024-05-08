<script setup>
import PageLinks from "@/components/globalComponents/PageLinks.vue";
import HoroscopeDate from "@/components/zodiacSignDateComponents/HoroscopeDate.vue";
import BlockCelebrity from "@/components/zodiacSignComponents/BlockCelebrity.vue";
import EastSection from "@/components/mainComponents/EastSection.vue";
import OtherSection from "@/components/mainComponents/OtherSection.vue";

import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { computed } from "vue";

const route = useRoute();
const props = defineProps({
  timePeriod: String,
});
const sign = route.params.sign;

const signNames = {
  oven: ["Овен", "Овна"],
  taurus: ["Телец", "Тельца"],
  gemini: ["Близнецы", "Близнецов"],
  cancer: ["Рак", "Рака"],
  leo: ["Лев", "Льва"],
  virgo: ["Дева", "Девы"],
  libra: ["Весы", "Весов"],
  scorpio: ["Скорпион", "Скорпиона"],
  sagittarius: ["Стрелец", "Стрельца"],
  capricorn: ["Козерог", "Козерога"],
  aquarius: ["Водолей", "Водолея"],
  pisces: ["Рыбы", "Рыб"],
};
const dateNames = {
  today: "Гороскоп на сегодня для ",
  tomorrow: "Гороскоп на завтра для ",
  weekly: "Гороскоп на неделю для ",
  monthly: "Гороскоп на месяц для ",
  yearly: "Гороскоп на год для ",
};
const selectedDate = ref(props.timePeriod);
const newSelectedDate = ref(null);
const signName = signNames[sign];
const nominativeCase = signName[0];
const genitiveCase = signName[1];
const russianDate = computed(() => dateNames[selectedDate.value]);
const router = useRouter();

const goToSelectedHoroscope = () => {
  goToHoroscope(newSelectedDate.value);
};

const goToHoroscope = (period) => {
  const horoscopePath = `/horoscope/zodiac/${sign}/${period}`;
  router.push({ path: horoscopePath });
  selectedDate.value = newSelectedDate.value;
};
</script>

<template>
  <PageLinks>
    <template #links>
      <router-link to="/">Главная</router-link>
      <router-link to="/horoscope/zodiac">Зодиакальный гороскоп</router-link>
      <router-link :to="`/horoscope/zodiac/${sign}`">{{
        nominativeCase
      }}</router-link>
      <router-link :to="`/horoscope/zodiac/${sign}/${selectedDate}`">{{
        russianDate + genitiveCase
      }}</router-link>
    </template>
  </PageLinks>

  <HoroscopeDate
    :dateInfo="{ russianDate: russianDate, genitiveCase: genitiveCase }"
  ></HoroscopeDate>

  <div class="choose_date">
    <div class="container">
      <div class="popup">
        <p>Гороскопы на другие дни:</p>
        <div class="select">
          <button
            v-if="selectedDate !== 'today'"
            :class="{ active: newSelectedDate === 'today' }"
            @click="newSelectedDate = 'today'"
          >
            Сегодня
          </button>
          <button
            v-if="selectedDate !== 'tomorrow'"
            :class="{ active: newSelectedDate === 'tomorrow' }"
            @click="newSelectedDate = 'tomorrow'"
          >
            Завтра
          </button>
          <button
            v-if="selectedDate !== 'weekly'"
            :class="{ active: newSelectedDate === 'weekly' }"
            @click="newSelectedDate = 'weekly'"
          >
            Неделя
          </button>
          <button
            v-if="selectedDate !== 'monthly'"
            :class="{ active: newSelectedDate === 'monthly' }"
            @click="newSelectedDate = 'monthly'"
          >
            Месяц
          </button>
          <button
              v-if="selectedDate !== 'yearly'"
              :class="{ active: newSelectedDate === 'yearly' }"
              @click="newSelectedDate = 'yearly'"
          >
            Год
          </button>
        </div>
        <button class="read btn_hover" @click="goToSelectedHoroscope">
          Читать гороскоп
        </button>
      </div>
    </div>
  </div>

  <BlockCelebrity></BlockCelebrity>
  <EastSection></EastSection>
  <OtherSection></OtherSection>
</template>

<style scoped>
.choose_date {
  margin-bottom: 32px;
}
.container {
  display: flex;
  justify-content: center;
}
.popup {
  border: 1px solid var(--dark-select);
  border-radius: 24px;
  padding: 32px;
  backdrop-filter: blur(24px);
  background: linear-gradient(
    71deg,
    rgba(130, 130, 131, 0.2) 0%,
    rgba(232, 232, 233, 0.2) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  width: 960px;
  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
    color: #fff;
  }

  .select {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    width: 415px;

    button {
      border: 1px solid var(--dark-select-40);
      border-radius: 26px;
      padding: 8px 20px;
      background: none;
      width: 95px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 17px;
      line-height: 165%;
      color: var(--dark-select-10);
    }
    button:first-child {
     width: 105px;
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

@media (max-width: 1000px) {
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
        width: calc(25% - 8px);
      }
      button:first-child {
        width: calc(25% - 8px);
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
@media (max-width: 600px) {
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
      font-size: 15px;
      line-height: 160%;
    }

    .select {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 32px;
      button {
        font-size: 13px;
        line-height: 169%;
        width: calc(25% - 8px);
      }
      button:first-child {
        width: calc(25% - 8px);
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
</style>
