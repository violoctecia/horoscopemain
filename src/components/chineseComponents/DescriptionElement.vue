<script setup>
import SocialLinks from "@/components/globalComponents/SocialLinks.vue";

const props = defineProps({
  element: Object,
});

</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <component :is="props.element.image" class="img"></component>
        <h1 class="title">Стихия: {{ props.element.translation.ru }}</h1>

        <p class="desc">{{ props.element.description }}</p>
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
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
  }


}
</style>