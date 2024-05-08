<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <h1>Что такое зодиакальный гороскоп?</h1>
        <p>
          Зодиакальный гороскоп - это система астрологии, которая базируется на
          положении Солнца в момент рождения человека. Он состоит из 12 знаков
          зодиака, каждый из которых представляет определенный период в году и
          обладает своими уникальными характеристиками. Зодиакальный гороскоп
          используется для предсказания характеристик личности, влияния на
          профессиональные и личные отношения, а также для прогнозирования
          возможных событий в жизни человека. С помощью зодиакального гороскопа
          можно узнать множество вещей, включая индивидуальные черты характера,
          сильные и слабые стороны, предпочтения в отношениях, профессиональные
          и творческие способности, а также возможные периоды благоприятных и
          неблагоприятных событий. Он помогает людям лучше понять себя и свое
          место в мире, а также принимать более осознанные решения в жизни
        </p>
        <img src="@/assets/images/ZodiacBlock1.svg" alt="space_img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  padding: 40px 48px;
  border: 1px solid var(--dark-main-80);
  border-radius: 40px;
  background: var(--dark-main);
  display: flex;
  flex-direction: column;
}
h1 {
  font-weight: 900;
  font-size: 56px;
  line-height: 107%;
  color: var(--dark-select-10);
  margin-bottom: 32px;
}
p {
  font-weight: 400;
  font-size: 19px;
  line-height: 147%;
  color: var(--dark-select-20);
  margin-bottom: 64px;
}
img {
  max-width: 100%;
  border-radius: 24px;
}
@media (max-width: 1100px) {
  .wrapper {
    padding: 24px;
    border-radius: 16px;
  }
  h1 {
    font-size: 24px;

    margin-bottom: 16px;
  }
  p {
    font-size: 15px;
    line-height: 160%;
    margin-bottom: 24px;
  }
}
</style>
