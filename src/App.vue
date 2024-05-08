<script setup>
import MainHeader from "@/components/globalComponents/MainHeader.vue";
import MainFooter from "@/components/globalComponents/MainFooter.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isNotFoundRoute = ref(false);

router.beforeEach((to, from, next) => {
  isNotFoundRoute.value = to.name === "NotFound";
  next();
});
</script>

<template>

  <MainHeader v-once></MainHeader>
  <router-view></router-view>
  <MainFooter v-if="!isNotFoundRoute"></MainFooter>
</template>
