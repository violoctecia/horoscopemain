<script setup>
const props = defineProps({
  chinese: Boolean,
  japanese: Boolean,
  zaroastrian: Boolean,
});


</script>

<template>
  <section class="other">
    <div class="container">
      <h1 class="title">Восточные гороскопы</h1>

      <div class="cards_wrapper">
        <div class="card chinese" v-if="!props.chinese">
          <div class="text">
            <h1>Китайский гороскоп</h1>
            <p>
              Система астрологии, основанная на круговом календаре, с 12
              знаками-животными, каждый из которых соответствует году рождения.
            </p>
          </div>
          <router-link to="/horoscope/chinese"
          >Читать
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2005_293)">
                <path
                    d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                    fill="#E8E8E9"
                />
              </g>
              <defs>
                <clipPath id="clip0_2005_293">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </router-link>
        </div>
        <div class="card japanese"  v-if="!props.japanese">
          <div class="text">
            <h1>Японский гороскоп</h1>
            <p>
              Система астрологии, основанная на древних японских верованиях,
              которая отражает характер через 12 знаков животных,
              соответствующих году рождения.
            </p>
          </div>
          <router-link to="/horoscope/japanese"
          >Читать
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2005_293)">
                <path
                    d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                    fill="#E8E8E9"
                />
              </g>
              <defs>
                <clipPath id="clip0_2005_293">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </router-link>
        </div>
        <div class="card zaroastrian"  v-if="!props.zaroastrian">
          <div class="text">
            <h1>Зороастрийский гороскоп</h1>
            <p>
              Древняя система астрологии, основанная на учениях пророка
              Заратуштры, учитывающая влияние планет на духовную эволюцию
              человека и принципы морали.
            </p>
          </div>
          <router-link to="/horoscope/zoroastrian"
          >Читать
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2005_293)">
                <path
                    d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                    fill="#E8E8E9"
                />
              </g>
              <defs>
                <clipPath id="clip0_2005_293">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  margin-bottom: 64px;
}
.cards_wrapper {
  display: flex;
  gap: 16px;
}
.card {
  background: #1b1d1f;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px;
  height: 480px;
  max-width: 520px;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  h1 {
    font-weight: 800;
    font-size: 32px;
    line-height: 112%;
    color: var(--dark-select-10);
    max-width: 60%;
  }
  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 165%;
    color: var(--dark-select-20);
  }
}
a {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 17px;
  line-height: 165%;
  color: #f6f6f6;
  position: relative;
  z-index: 15;
}
.chinese {
  background-image: url("@/assets/images/Oriental_horoscope1_chinese_mob.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.japanese {
  background-image: url("@/assets/images/Oriental_horoscope2_Japanese_mob.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.zaroastrian {
  background-image: url("@/assets/images/Oriental_horoscope3_Zoroastrian_mob.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

@media (max-width: 1050px) {
  .title {
    margin-bottom: 20px;
    padding-left: 24px;
  }
  .container {
    padding: 0;
  }
  .cards_wrapper {
    overflow-x: scroll;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: start;
    padding: 0 24px;
    padding-bottom: 20px;
  }
  .card {
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 24px;
    height: 426px;
    min-width: 310px;
    position: relative;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
    min-height: 170px;
    h1 {
      font-weight: 900;
      font-size: 20px;
      line-height: 120%;
      max-width: 100%;
    }
    p {
      font-weight: 400;
      font-size: 15px;
      line-height: 160%;
    }
  }
  a {
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
  }
}
</style>
