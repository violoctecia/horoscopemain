<script setup></script>

<template>
  <section>
    <div class="container">
      <h1 class="title">Звезды под знаком Овна</h1>
      <div class="flex_wrapper">
        <div class="block" v-for="index in 6" :key="index">
          <img src="@/assets/images/celebrity.png" alt="celebrity" />
          <h1>Анастасия Ивлеева</h1>
          <p>21 марта - 19 апреля</p>
          <span
            >Российская телеведущая, певица, актриса театра, кино и дубляжа,
            дизайнер.</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  margin-bottom: 56px;
}
.flex_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.block {
  border-radius: 24px;
  padding: 40px;
  background: var(--dark-select);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 341px;

  img {
    width: 120px;
    margin-bottom: 24px;
  }
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 117%;
    text-align: center;
    color: var(--dark-select-10);
    margin-bottom: 8px;
  }
  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 165%;
    text-align: center;
    color: var(--dark-select-20);
    margin-bottom: 16px;
  }
  span {
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
    text-align: center;
    color: var(--dark-select-10);
  }
}
@media (max-width: 1100px) {
  .title {
    margin-bottom: 20px;
    padding-left: 24px;
  }
  .container {
    padding: 0;
  }
  .flex_wrapper {
    overflow-x: scroll;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    justify-content: start;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 20px;
  }
  .block {
    padding: 24px 16px;
    min-width: 252px;
    min-height: 252px;

    img {
      width: 72px;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 16px;
      line-height: 125%;
      margin-bottom: 2px;
    }
    p {
      font-weight: 500;
      font-size: 11px;
      line-height: 182%;
      margin-bottom: 8px;
    }
    span {
      font-size: 13px;
      line-height: 169%;
    }
  }
}
</style>
