<script setup>
import SocialLinks from "@/components/globalComponents/SocialLinks.vue";

const props = defineProps({
  year: String,
  sign: String,
  title: String,
});


</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <h1 class="title">{{ props.title }}</h1>
        <div class="info_wrapper">

          <p class="desc">Дата рождения: {{ props.year }}</p>
          <p class="desc">Знак: {{ props.sign }}</p>
        </div>

        <SocialLinks></SocialLinks>

      </div>
    </div>
  </section>
</template>

<style scoped>
.img {
  border-radius: 49px;
  padding: 12px;
  width: 96px;
  height: 96px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-select);
}

.wrapper {
  border: 1px solid var(--dark-main-80);
  border-radius: 40px;
  padding: 40px 48px;
  background: var(--dark-main);
  position: relative;
}

h1 {
  text-align: start;
  margin-bottom: 24px;
  max-width: 700px;
}

.info_wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 1100px) {
  .wrapper {
    border-radius: 16px;
    padding: 24px;
  }

  .img {
    width: 64px;
    height: 64px;
    margin-bottom: 12px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  h1 {
    margin-bottom: 16px;
  }


  .info_wrapper {
    gap: 6px;
    margin-bottom: 16px;

    p {
      font-size: 13px;
    }
  }

}
</style>