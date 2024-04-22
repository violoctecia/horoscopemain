<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdownOnClickOutside = (event) => {
  // Проверяем, был ли клик сделан вне меню и не на кнопке вызова меню
  if (
    isDropdownOpen.value &&
    !event.target.closest(".dropdown-trigger") &&
    !event.target.closest(".dropdown-menu")
  ) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdownOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdownOnClickOutside);
});
</script>

<template>
  <header>
    <button>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1455 0.789324C11.064 0.711439 10.9557 0.667969 10.843 0.667969C10.7304 0.667969 10.622 0.711439 10.5406 0.789324L0.472656 10.4072C0.429899 10.4481 0.395882 10.4973 0.372665 10.5517C0.349447 10.6061 0.337511 10.6647 0.337578 10.7239L0.335938 19.7506C0.335938 20.2147 0.520312 20.6598 0.8485 20.988C1.17669 21.3162 1.62181 21.5006 2.08594 21.5006H7.34141C7.57347 21.5006 7.79603 21.4084 7.96012 21.2443C8.12422 21.0802 8.21641 20.8576 8.21641 20.6256V13.1881C8.21641 13.072 8.2625 12.9608 8.34455 12.8787C8.42659 12.7967 8.53787 12.7506 8.65391 12.7506H13.0289C13.1449 12.7506 13.2562 12.7967 13.3383 12.8787C13.4203 12.9608 13.4664 13.072 13.4664 13.1881V20.6256C13.4664 20.8576 13.5586 21.0802 13.7227 21.2443C13.8868 21.4084 14.1093 21.5006 14.3414 21.5006H19.5947C20.0588 21.5006 20.5039 21.3162 20.8321 20.988C21.1603 20.6598 21.3447 20.2147 21.3447 19.7506V10.7239C21.3448 10.6647 21.3328 10.6061 21.3096 10.5517C21.2864 10.4973 21.2524 10.4481 21.2096 10.4072L11.1455 0.789324Z"
          fill="#111010"
        />
      </svg>
    </button>
    <nav>
      <ul>
        <li><a href="#">Зодикальный гороскоп</a></li>
        <li><a href="#">Китайский гороскоп</a></li>
        <li><a href="#">Японский гороскоп</a></li>
        <li @click="toggleDropdown" class="dropdown-trigger">
          <a href="#">
            Другие гороскопы
            <svg
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

          <ul v-show="isDropdownOpen" class="dropdown-menu">
            <li><a href="#">Зороастрийский гороскоп</a></li>
            <li><a href="#">Цветочный гороскоп</a></li>
            <li><a href="#">Гороскоп Майя</a></li>
            <li><a href="#">Гороскоп друидов </a></li>
          </ul>
        </li>

        <li><a href="#">О проекте</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.dropdown-trigger {
  position: relative;
}
.dropdown-menu {
  display: flex;
  gap: 14px;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 2;
  background: #1b1d1f;
  padding: 15px;
  border-radius: 24px;
}
button {
  position: absolute;
  left: -40px;
  top: 50%; /* Позиционируем верхнюю границу дочернего элемента на 50% от верхней границы родительского контейнера */
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffeb61;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background: #ffea61be;
}
header {
  display: flex;
  justify-content: center;
  padding: 32px 50px;
  position: relative;
}
nav {
  width: 100%;
  padding: 0 25px;
}
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
}
li a:hover {
  opacity: 70%;
}
</style>
