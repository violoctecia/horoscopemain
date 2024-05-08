<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <h1>
          Астрология:
          <span>понимание путеводной звезды нашего существования</span>
        </h1>
        <p>
          Астрология - древнейшая практика познания мира и самопознания, которая
          исследует влияние планет и звезд на жизнь и судьбу человека. Знание
          своего астрологического гороскопа дает более развернутое понимание
          жизненного пути, а также может помочь людям лучше планировать и
          контролировать свою жизнь. Позвольте астрологии стать Вашим помощником
          в решении жизненных вызовов и принятии более осознанных решений
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  padding-left: 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 768px;
}
h1 {
  font-weight: 900;
  font-size: 56px;
  line-height: 107%;
  color: var(--dark-select-10);

  span {
    color: var(--yellow);
    font-weight: 900;
    font-size: 56px;
    line-height: 107%;
  }
}
p {
  font-weight: 400;
  font-size: 19px;
  line-height: 147%;
  color: var(--dark-select-20);
}

@media (max-width: 1100px) {
  .wrapper {
    padding: 0;
    gap: 16px;
  }
  h1 {
    font-size: 24px;

    span {
      font-size: 24px;
    }
  }
  p {
    font-size: 15px;
  }
}
</style>
