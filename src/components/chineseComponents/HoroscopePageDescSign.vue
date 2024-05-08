<script setup>
import rat from "@/assets/svg_chinese_n_japanese/rat.vue";
import dog from "@/assets/svg_chinese_n_japanese/dog.vue";
import ox from "@/assets/svg_chinese_n_japanese/ox.vue";
import tiger from "@/assets/svg_chinese_n_japanese/tiger.vue";
import rabbit from "@/assets/svg_chinese_n_japanese/rabbit.vue";
import dragon from "@/assets/svg_chinese_n_japanese/dragon.vue";
import snake from "@/assets/svg_chinese_n_japanese/snake.vue";
import horse from "@/assets/svg_chinese_n_japanese/horse.vue";
import goat from "@/assets/svg_chinese_n_japanese/goat.vue";
import monkey from "@/assets/svg_chinese_n_japanese/monkey.vue";
import rooster from "@/assets/svg_chinese_n_japanese/rooster.vue";
import pig from "@/assets/svg_chinese_n_japanese/pig.vue";
import water from "@/assets/svg_elements_chinese/water.vue"
import fire from "@/assets/svg_elements_chinese/fire.vue"
import metal from "@/assets/svg_elements_chinese/metal.vue"
import wood from "@/assets/svg_elements_chinese/wood.vue"
import earth from "@/assets/svg_elements_chinese/earth.vue"

const props = defineProps({
  sign: String,
  element: String,
});

const signComponents = {
  'Крыса': rat,
  'Собака': dog,
  'Бык': ox,
  'Тигр': tiger,
  'Кролик': rabbit,
  'Дракон': dragon,
  'Змея': snake,
  'Лошадь': horse,
  'Коза': goat,
  'Обезьяна': monkey,
  'Петух': rooster,
  'Свинья': pig,
};

const elementComponents = {
  'Вода': water,
  'Огонь': fire,
  'Металл': metal,
  'Дерево': wood,
  'Земля': earth,
};
</script>

<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <div class="block">
          <component :is="signComponents[props.sign]" class="img"></component>
          <h1 class="title">Описание знака: {{props.sign}}</h1>
          <p class="desc">Крыса в китайском гороскопе символизирует сообразительность, обаяние и проницательность. Люди,
            рожденные в год Крысы, обладают высоким интеллектом, быстрым умом и острым чутьем. Они обладают необычайной
            способностью к анализу и адаптации, благодаря чему могут успешно преодолевать любые трудности. Крысы —
            талантливые стратеги и прекрасные дипломаты, способные находить выход из самых сложных ситуаций. Их обаяние
            и общительность делают их популярными в обществе, а их творческий потенциал и остроумие привлекают к ним
            внимание. Крысы энергичны и амбициозны, всегда стремясь к достижению новых высот в своей жизни и карьере</p>
        </div>
        <div class="block">
          <component :is="elementComponents[props.element]" class="img"></component>
          <h1 class="title">Описание стихии: {{ props.element }}</h1>
          <p class="desc">Вода в китайской космологии символизирует поток жизни, гибкость и интуицию. Эта стихия
            ассоциируется с эмоциональной глубиной, гармонией и внутренней силой. Люди, принадлежащие к стихии Вода,
            обладают высокой чувствительностью, интуицией и эмпатией. Они способны легко сливаться с окружающей средой и
            адаптироваться к изменениям. Водные типы личности ценят глубокие отношения и понимание, стремясь к гармонии
            и балансу во всем. Они обладают творческим мышлением и глубоким внутренним миром, что делает их отличными
            художниками, писателями или духовными лидерами. Водная стихия напоминает о важности интуиции и внутренней
            гармонии, призывая к тому, чтобы плыть по течению жизни и слушать свои внутренние ощущения.</p>
        </div>
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

.block {
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    line-height: 110%;
    text-align: start;
    margin-bottom: 32px;
  }
}

.container {
  max-width: 720px;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 64px;
}
@media (max-width: 1100px) {
  .wrapper {
    gap: 20px;
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
.block {
  h1 {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 117%;
  }

  p {
    font-size: 15px;
    line-height: 160%;
  }
}


  .info_wrapper {
    gap: 6px;
    margin-bottom: 16px;
  }

}
</style>