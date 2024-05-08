<script setup>
const handleLinkClick = () => {
  document.getElementById("app").classList.remove("menu-active");
};
</script>

<template>
  <div class="mobile_menu">
    <div class="container">
      <nav class="mobile_nav">
        <li>
          <router-link to="/horoscope/zodiac" @click.native="handleLinkClick">
            Зодиакальный гороскоп
            <img src="@/assets/images/arrowRight.svg" alt="arrowRight"
          /></router-link>
        </li>
        <li>
          <router-link to="/horoscope/chinese" @click.native="handleLinkClick"
            >Китайский гороскоп<img
              src="@/assets/images/arrowRight.svg"
              alt="arrowRight"
          /></router-link>
        </li>
        <li>
          <router-link to="/horoscope/japanese" @click.native="handleLinkClick"
            >Японский гороскоп<img
              src="@/assets/images/arrowRight.svg"
              alt="arrowRight"
          /></router-link>
        </li>
        <li>
          <router-link to="/horoscope/zoroastrian"
            >Зороастрийский гороскоп<img
              src="@/assets/images/arrowRight.svg"
              alt="arrowRight"
          /></router-link>
        </li>
        <li>
          <router-link to="/horoscope/floral"
            >Цветочный гороскоп<img
              src="@/assets/images/arrowRight.svg"
              alt="arrowRight"
          /></router-link>
        </li>
        <li>
          <router-link to="/horoscope/maya"
            >Гороскоп Майя<img
              src="@/assets/images/arrowRight.svg"
              alt="arrowRight"
          /></router-link>
        </li>
        <li>
          <router-link to="/horoscope/druids"
            >Гороскоп Друидов<img
              src="@/assets/images/arrowRight.svg"
              alt="arrowRight"
          /></router-link>
        </li>
        <li>
          <router-link to="/horoscope/404"
            >О проекте<img
              src="@/assets/images/arrowRight.svg"
              alt="arrowRight"
          /></router-link>
        </li>
      </nav>
      <img
        class="mobile_menu_img"
        src="@/assets/images/mobile_menu.svg"
        alt="mobile_menu"
      />
    </div>
  </div>
</template>

<style scoped>
.mobile_menu {
  display: flex;
  justify-content: space-between;
}
.mobile_menu_img {
  margin-bottom: 10vh;
}
.container {
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
  height: 100vh;
  background: #111010;
  z-index: 100;
}

.mobile_nav {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0;
  width: 100%;
  li {
    width: 100%;
    a {
      font-weight: 800;
      font-size: 20px;
      line-height: 120%;
      color: var(--dark-select-10);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
@media (max-height: 800px) {
  .mobile_menu_img {
    width: 200px;
  }
  .mobile_nav {
    gap: 14px;
    li {
      a {
        font-size: 16px;
        line-height: 110%;
        color: var(--dark-select-10);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
@media (max-height: 600px) {
  .mobile_menu_img {
    display: none;
  }
  .mobile_nav {
    overflow-y: scroll;
    padding-bottom: 100px;
  }
}
</style>
