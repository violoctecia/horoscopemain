<script setup>
import { ref } from "vue";
const isMenuActive = ref(false);

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
  if (isMenuActive.value) {
    document.body.classList.add("menu-active");
  } else {
    document.body.classList.remove("menu-active");
  }
};
</script>

<template>
  <header>
    <div class="container">
      <div class="mobile_wrapper">
        <a href="#" class="home">
          <svg
            width="31"
            height="48"
            viewBox="0 0 31 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.754701 1.0174C0.773427 1.21943 0.822419 1.76241 0.863534 2.2241C1.11091 5.00237 1.77157 8.28956 2.58571 10.7934C4.03493 15.2505 6.34273 19.0879 8.8516 21.2123C10.6934 22.7719 12.4913 23.6352 14.3691 23.8616L14.8528 23.9199L14.5073 23.9684C13.7674 24.0722 12.4733 24.4299 11.8545 24.7016C7.91944 26.4298 4.51607 31.0066 2.52732 37.2446C1.74193 39.7082 1.07643 43.0604 0.862635 45.6302C0.822627 46.1112 0.774326 46.6699 0.755323 46.8719C0.736252 47.0739 0.733557 47.2392 0.749243 47.2392C0.764997 47.2392 0.926414 46.9826 1.10794 46.6691C2.12433 44.9141 4.10155 42.3993 5.45155 41.1448C7.22596 39.4958 8.96064 38.3451 10.7621 37.6217C14.7848 36.0067 19.0822 36.5271 22.8683 39.0878C25.5901 40.9287 27.6795 43.2521 30.0101 47.0293L30.1612 47.2741L30.1206 46.7145C29.8068 42.3948 28.863 38.1716 27.4361 34.7026C24.9275 28.6039 21.0764 24.747 16.7876 24.0381L16.0275 23.9125L16.4766 23.8613C19.5486 23.5115 22.5499 21.3937 24.9177 17.9049C27.314 14.3743 28.991 9.70548 29.7711 4.39266C29.9377 3.25801 30.1875 0.726326 30.1378 0.676029C30.1249 0.662878 29.9171 0.974381 29.676 1.36815C26.4951 6.56555 22.3109 9.97536 17.9737 10.905C16.8349 11.149 14.8722 11.2145 13.7472 11.046C10.5719 10.5704 7.75423 9.02372 5.0033 6.24642C3.6647 4.89492 2.30025 3.14063 1.2357 1.40215C0.982385 0.988581 0.762924 0.650146 0.747929 0.650146C0.732935 0.650146 0.735975 0.815377 0.754701 1.0174Z"
              fill="#FFEB61"
            />
          </svg>
        </a>

        <div
          class="hamburger"
          @click="toggleMenu"
          :class="{ 'menu--active': isMenuActive }"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>

      <div class="mobile_menu" :class="{ 'menu--active': isMenuActive }">
        <nav class="mobile_nav">
          <li>
            <a href="#"
              >Зодиакальный гороскоп
              <img src="../assets/images/arrowRight.svg" alt="arrowRight"
            /></a>
          </li>
          <li>
            <a href="#"
              >Китайский гороскоп<img
                src="../assets/images/arrowRight.svg"
                alt="arrowRight"
            /></a>
          </li>
          <li>
            <a href="#"
              >Японский гороскоп<img
                src="../assets/images/arrowRight.svg"
                alt="arrowRight"
            /></a>
          </li>
          <li>
            <a href="#"
              >Зороастрийский гороскоп<img
                src="../assets/images/arrowRight.svg"
                alt="arrowRight"
            /></a>
          </li>
          <li>
            <a href="#"
              >Цветочный гороскоп<img
                src="../assets/images/arrowRight.svg"
                alt="arrowRight"
            /></a>
          </li>
          <li>
            <a href="#"
              >Гороскоп Майя<img
                src="../assets/images/arrowRight.svg"
                alt="arrowRight"
            /></a>
          </li>
          <li>
            <a href="#"
              >Гороскоп Друидов<img
                src="../assets/images/arrowRight.svg"
                alt="arrowRight"
            /></a>
          </li>
          <li>
            <a href="#"
              >О проекте<img
                src="../assets/images/arrowRight.svg"
                alt="arrowRight"
            /></a>
          </li>
        </nav>
        <img src="../assets/images/mobile_menu.svg" alt="mobile_menu" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Зодикальный гороскоп</a>
          </li>
          <li><a href="#">Китайский гороскоп</a></li>
          <li><a href="#">Японский гороскоп</a></li>
          <li>
            <a href="#"
              >Другие гороскопы<svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 16C12.0163 16.0005 11.7899 15.9191 11.61 15.77L5.60997 10.77C5.40575 10.6003 5.27733 10.3564 5.25295 10.092C5.22857 9.82753 5.31023 9.56425 5.47997 9.36003C5.64971 9.15581 5.89362 9.02739 6.15805 9.00301C6.42247 8.97863 6.68575 9.06029 6.88997 9.23003L12.25 13.71L17.61 9.39003C17.7123 9.30697 17.83 9.24493 17.9563 9.2075C18.0826 9.17007 18.2151 9.15798 18.3462 9.17192C18.4772 9.18586 18.6042 9.22555 18.7198 9.28873C18.8354 9.3519 18.9374 9.4373 19.02 9.54003C19.1116 9.64285 19.1809 9.76348 19.2237 9.89435C19.2665 10.0252 19.2818 10.1635 19.2687 10.3006C19.2555 10.4377 19.2142 10.5705 19.1473 10.6909C19.0804 10.8112 18.9894 10.9165 18.88 11L12.88 15.83C12.6949 15.9555 12.4731 16.0154 12.25 16Z"
                  fill="#F6F6F6"
                /></svg
            ></a>
          </li>
          <li><a href="#">О проекте</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.mobile_menu {
  display: none;
}
.home {
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
header .container {
  display: flex;
  justify-content: center;
  padding: 32px 50px;
  position: relative;
}
nav {
  width: 100%;
  padding: 0 25px;

  ul {
    display: flex;
    justify-content: space-between;

    li a {
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      color: #f6f6f6;
    }

    li a:hover {
      opacity: 70%;
    }
  }
}

.hamburger {
  display: none;
}

@media (max-width: 1200px) {
  .home {
    position: static;
    transform: none;

    width: 18px;
    height: 29px;
    svg {
      width: 18px;
      height: 29px;
    }
  }
  .mobile_wrapper {
    z-index: 15;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  nav {
    display: none;
  }
  header .container {
    padding: 24px 24px 0 24px;
    position: relative;
  }
  .hamburger {
    display: flex;
    flex-direction: column;
    align-self: center;
  }
  .hamburger .line {
    width: 18px;
    height: 2px;
    background-color: #ffeb61;
    display: block;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
  }
  .hamburger .line:nth-child(2) {
    margin: 5px auto;
  }
  .hamburger.menu--active .line:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.menu--active .line:nth-child(2) {
    opacity: 0;
  }

  .hamburger.menu--active .line:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
  .mobile_menu.menu--active {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    background: #111010;
    padding: 93px 24px 0 24px;
    z-index: 10;
  }

  .mobile_nav {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 0;
    margin-bottom: 40px;
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
}
</style>
