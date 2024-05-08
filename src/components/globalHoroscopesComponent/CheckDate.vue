<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import YellowButton from "@/UI/yellowButton.vue";
import { useRouter } from "vue-router";

const props = defineProps({
  horoscopeType: String,
  title: String,
  description: String,
  mb: Number,
});

const router = useRouter();
const inputValue = ref('Дата рождения');
const date = ref('');
const error = ref('');

const showDateInput = () => {
  if (inputValue.value === 'Дата рождения') {
    inputValue.value = '';
  }
};

const hideDateInput = () => {
  if (!inputValue.value) {
    inputValue.value = 'Дата рождения';
  }
};

const handleInput = () => {

  let cleanedValue = inputValue.value.replace(/\D/g, '');


  if (cleanedValue.length > 2) {
    cleanedValue = cleanedValue.slice(0, 2) + ' - ' + cleanedValue.slice(2);
  }


  if (cleanedValue.length > 7) {
    cleanedValue = cleanedValue.slice(0, 7) + ' - ' + cleanedValue.slice(7);
  }


  inputValue.value = cleanedValue;


  date.value = cleanedValue.replace(/\s+/g, '');
};

const handleYellowButtonClick = () => {
  // Проверка на корректность даты
  const parts = date.value.split('-');
  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const year = parseInt(parts[2]);

  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12) {
    error.value = 'Пожалуйста, введите корректную дату рождения.';
    return;
  }

  const path = `/horoscope/${props.horoscopeType}/date/${date.value}`;
  router.push(path);
};

const marginBottom = ref(window.innerWidth >= 1100 ? (props.mb || 96) : 40);

onMounted(() => {
  window.addEventListener("resize", updateMarginBottom);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateMarginBottom);
});

function updateMarginBottom() {
  marginBottom.value = window.innerWidth >= 1100 ? (props.mb || 96) : 40;
}
</script>

<template>
  <section :style="{ marginBottom: `${marginBottom}px` }">
    <div class="container">
      <div class="wrapper">
        <div class="text">
          <h1>Узнайте свой {{props.title}}</h1>
          <p>Введите дату рождения, чтобы узнать свой знак</p>
        </div>
        <div class="buttons">
          <input
              type="text"
              placeholder="день / месяц / год"
              @focus="showDateInput"
              @blur="hideDateInput"
              @input="handleInput"
              v-model="inputValue"
              maxlength="14"
              id="input_date"

          >
          <YellowButton @click="handleYellowButtonClick">Читать гороскоп</YellowButton>
        </div>
        <div class="error" v-if="error">{{error}}</div>
      </div>
    </div>
  </section>
</template>


<style scoped>
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
  input:focus {
    border: 1px solid var(--yellow-80);
    color: rgba(255, 255, 255, 0.87);
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.87); /* ваш цвет */
    opacity: 0.87; /* ваша прозрачность */
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
@media screen and (-webkit-min-device-pixel-ratio: 0) and (max-width: 550px) {
  .buttons input:focus {
    font-size: 16px;
  }
}
</style>