<script setup></script>

<template>
  <section class="telegram">
    <div class="container">
      <div class="telegram_wrapper">
        <div class="icon">
          <div class="telegram_icon">
            <svg
              width="37"
              height="32"
              viewBox="0 0 37 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.9692 2.76297C37.2557 0.921872 35.4944 -0.531318 33.8471 0.187425L1.03909 14.5024C-0.142165 15.0178 -0.0557535 16.7961 1.16939 17.1838L7.93513 19.325C9.22658 19.7337 10.6247 19.5223 11.7524 18.7481L27.0065 8.27497C27.4665 7.95909 27.9679 8.60915 27.5748 9.01166L16.5946 20.2619C15.5295 21.3534 15.7409 23.2028 17.0222 24.0012L29.3157 31.6624C30.6945 32.5216 32.4683 31.6585 32.7261 30.0025L36.9692 2.76297Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="text">
          <p>Подпишитесь на гороскопы в Telegram</p>
          <span>А мы будем ежедневно отправлять ваш личный гороскоп</span>
        </div>
        <button><a href="#">Подписаться</a></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.telegram {
  margin-bottom: 64px;
}
.telegram_wrapper {
  box-shadow: 0 8px 24px 0 #000;
  display: flex;
  gap: 32px;
  padding: 32px;
  justify-content: space-between;
  align-items: center;
  background: rgba(232, 232, 233, 0.06);
  background-image: url("@/assets/images/telegram_bg.svg");
  backdrop-filter: blur(3px);
  background-repeat: no-repeat;
  background-position: top -50px right -70px;
  border-radius: 40px;
}

@media (min-width: 945px) {
  .telegram_wrapper {
    overflow: hidden;

    transition: background-position 0.6s ease;
  }
  .telegram_wrapper:hover {
    background-position: top -40px right -40px;
  }
}

.telegram_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 47px;
  background: linear-gradient(180deg, #37bbfe 0%, #007dbb 100%);


  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
}
.text {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 117%;
    color: var(--white);
  }
  span {
    font-weight: 400;
    font-size: 17px;
    line-height: 165%;
    color: var(--dark-select-20);
  }
}
button {
  border-radius: 61px;
  border: 1px solid var(--white);
  background: none;
  max-width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: var(--white);
    padding: 20px 52px;
  }
}

button:hover {
  border: 1px solid var(--yellow);
  a {
    color: var(--yellow);
  }
}
@media (max-width: 1050px) {
  .telegram {
    margin-bottom: 40px;
  }
}
@media (max-width: 945px) {
  .telegram_wrapper {
    gap: 20px;
    padding: 20px;
    border-radius: 24px;
    background-size: auto;
  }
  .text {
    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 117%;
    }
    span {
      font-weight: 400;
      font-size: 15px;
      line-height: 165%;
    }
  }
  button {
    max-width: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: third;

    a {
      font-weight: 500;
      font-size: 18px;
      line-height: 120%;
      padding: 10px 25px;
    }
  }
}
@media (max-width: 770px) {
  .icon {
    align-self: start;
  }
  .telegram_icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;

    svg {
      width: 23px;
      height: 20px;
      margin-right: 3px;
    }
  }
  .telegram_wrapper {
    gap: 20px;
    padding: 20px;
    border-radius: 24px;
    background-position: center;
    background: rgba(232, 232, 233, 0.06);
    background-image: url("@/assets/images/telegram_bg_mobile.png");
  }

  .text {
    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 125%;
    }
    span {
      font-weight: 400;
      font-size: 11px;
      line-height: 145%;
    }
  }
  button {
    max-width: 134px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: third;

    a {
      font-weight: 500;
      font-size: 15px;
      line-height: 160%;
      padding: 3px 20px;
    }
  }
}

@media (max-width: 490px) {
  .telegram_wrapper {
    display: grid;
    grid-column-start: auto;
    grid-template-areas:
      "first second"
      "first third";
    gap: 15px;
    padding: 24px;
    border-radius: 16px;
    justify-content: center;
  }
  .icon {
    grid-area: first;
    align-self: start;
  }
  .telegram_icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;

    svg {
      width: 23px;
      height: 20px;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    grid-area: second;
  }
}
</style>
