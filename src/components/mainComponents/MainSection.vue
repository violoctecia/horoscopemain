<script setup></script>

<template>
  <section class="main">
    <div class="container">
      <div class="main_text">
        <div class="text_wrapper">
          <h1>
            Здесь вы найдете <span>гороскоп</span> для всех знаков зодиака
          </h1>
          <h2>
            Гороскоп на каждый день: узнай, что приготовили для тебя звёзды
          </h2>
        </div>
        <img src="@/assets/images/main_illustration.svg" alt="" />
      </div>
      <div class="main_card">
        <h1>Лунный гороскоп на сегодня</h1>
        <div class="date">
          <p>5–6 лунные сутки</p>
          <p>24.12.2024</p>
        </div>
        <p>
          Гороскоп на сегодня говорит, что это день, когда звезды призывают нас
          следовать своей интуиции. Поддаемся вдохновению и не боимся
          исследовать новые возможности. День благоприятен для самовыражения,
          общения с близкими и укрепления душевного равновесия. Наслаждаемся
          каждым моментом и делимся своей положительной энергией с окружающими.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main_card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 48px;
  border: 1px solid var(--dark-main-80);
  border-radius: 40px;
  position: relative;
  z-index: 3;
  background: #111010;

  h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 110%;
    color: var(--dark-select-10);
  }
  .date {
    display: flex;
    align-items: center;
    gap: 24px;

    p {
      font-weight: 500;
      font-size: 17px;
      line-height: 165%;
      color: var(--yellow);
    }
  }
  p {
    font-weight: 400;
    font-size: 19px;
    line-height: 147%;
    color: var(--dark-select-20);
  }
}
.main_text {
  position: relative;

  img {
    position: absolute;
    z-index: -1;
    bottom: -100px;
    max-width: 100%;
  }
}
.text_wrapper {
  padding: 52px 48px 88px 48px;

  display: flex;
  flex-direction: column;
  gap: 24px;
}
h1 {
  font-weight: 900;
  font-size: 56px;
  line-height: 107%;
  color: var(--dark-select-10);
  max-width: 800px;
  span {
    font-weight: 900;
    font-size: 56px;
    line-height: 107%;
    color: var(--yellow);
  }
}
h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  color: var(--dark-select-10);
  max-width: 620px;
}

@media (max-width: 1050px) {
  .text_wrapper {
    padding: 40px 0 104px 0;
    gap: 8px;
    max-width: 500px;
  }

  .main_card {
    border-radius: 16px;
    padding: 24px;
    h1 {
      font-size: 24px;
      line-height: 117%;
    }
    .date {
      p {
        font-size: 15px;
        line-height: 160%;
      }
    }
    p {
      font-size: 15px;
      line-height: 160%;
    }
  }
  h1 {
    font-size: 32px;
    line-height: 119%;
    span {
      font-size: 32px;
      line-height: 119%;
    }
  }
  h2 {
    font-size: 17px;
    line-height: 153%;
  }
}
@media (max-width: 800px) {
  .main_text {
    img {
      bottom: -20px;
    }
  }
}
</style>
