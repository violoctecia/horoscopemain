<template>
  <section class="other">
    <div class="title">Другие гороскопы</div>
    <div class="card_wrapper">
      <div class="card" v-for="index in 3" :key="index">
        <h1>Цветочный гороскоп</h1>
        <a href="#"
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
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 100px;
}
.card_wrapper {
  display: flex;

  gap: 16px;
}
.card {
  position: relative;
  background: #1b1d1f;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 460px;
  width: calc((100% - 32px) / 3);

  h1 {
    font-weight: 800;
    padding: 48px 48px 0 48px;
    font-size: 32px;
    line-height: 112%;
    color: #e8e8e9;
  }
  a {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 48px 0 48px;
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
    color: #f6f6f6;
  }
}
.card::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  height: 250px;
  width: 307px;
  background-image: url("../../../assets/images/card-bg-2.svg");
}
</style>
