<template>
  <div class="education-card" :key="index" v-for="(item, index) in cardData">
    <div class="education-card__text-container">
      <h3>{{ item.title }}</h3>
      <p>{{ item.subtitle }}</p>
      <p><small>Finished: {{ item.date }}</small></p>
    </div>
    <picture class="education-card__image-container">
      <img :src="item.urlImg" :alt="item.alt" />
    </picture>
  </div>
</template>

<script lang="ts">
export default {
  name: "CardEducation",
  props: {
    cardData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

.education-card {
  width: 24rem;
  border: 2px solid $orange-light;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__text-container {
    width: 100%;
    height: 60%;
    padding: 2rem;
    text-align: center;
    grid-area: text;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 2rem;

    h3,
    p {
      color: $color-text;
    }
  }

  &__image-container {
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
@media (min-width: 1300px) {
  .education-card {
    width: 60rem;
    height: 20rem;
    display: grid;
    grid-template-columns: 1fr 40%;
    grid-template-areas: "text img";

    &__text-container {
      height: 100%;
      text-align: start;
      grid-area: text;
    }
    &__image-container {
      grid-area: img;
    }
  }
}
</style>
