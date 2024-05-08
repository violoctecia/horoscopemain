<script setup></script>

<template>
  <section class="pagelinks">
    <div class="container">
      <slot name="links"></slot>
    </div>
  </section>
</template>

<style>
.pagelinks {
  padding: 40px 0;
  margin-bottom: 0;
}
.pagelinks .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.pagelinks a {
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  color: var(--white);
  position: relative;

  padding-right: 40px;
}

.pagelinks a:last-child {
  color: var(--yellow);
  padding-right: 0;
}
.pagelinks {
  a:not(:last-child)::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url("@/assets/images/arrowRight.svg");
    background-size: contain;
  }
}
@media (max-width: 1100px) {
  .pagelinks {
    padding: 24px 0;
  }
  .pagelinks .container {
    display: flex;
    justify-content: start;
  }
  .pagelinks a {
    font-size: 13px;
    line-height: 169%;
  }
}
</style>
