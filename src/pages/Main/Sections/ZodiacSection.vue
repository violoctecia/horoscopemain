<template>
  <section class="zodiac">
    <div class="title">Зодиакальный гороскоп</div>
    <div class="card_wrapper">
      <div class="card" v-for="index in 12" :key="index">
        <h1>Овен</h1>
        <p>21 марта - 19 апреля</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 100px;
}
.card {
  position: relative;
  padding: 32px;
  background: #1b1d1f;
  border-radius: 24px;
  min-height: 234px;
  width: 252px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: #e8e8e9;
  }
  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 165%;
    color: #d1d2d2;
  }
}
.card::before {
  content: "";
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 64px;
  height: 64px;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"%3E%3Ccircle cx="32" cy="32" r="32" fill="%23111010" /%3E%3C/svg%3E');
}
</style>
