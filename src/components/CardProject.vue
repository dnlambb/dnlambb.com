<template>
  <div
    class="card-project"
    :key="index"
    v-for="(item, index) in project"
    :style="{
      background:
        'linear-gradient(to left, rgba(26, 28, 32, 0.6) 30%, rgb(26, 28, 32) 80%), url(' +
        `${item.urlImg}` +
        ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }"
  >
    <p class="card-project__tech-tag">
      {{ item.tag }}
    </p>
    <div class="card-project__content-container">
      <h3>
        {{ item.title }}
      </h3>
      <p>
        {{ item.desc }}
      </p>
    </div>
    <div class="card-project__button-container">
      <a class="button-primary" button-glitch="Code" :href="item.urlRepo">Code</a>
      <a class="button-primary" button-glitch="Web" :href="item.urlWeb">Web</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CardProject",
  props: {
    project: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";
@import "../styles/button-primary.scss";

.card-project {
  width: 100%;
  height: 40rem;
  border-radius: 0.8rem;
  border: 2px solid $primary;
  background: $terciary;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 50% 20%;
  justify-content: space-evenly;

  &__tech-tag {
    width: fit-content;
    height: fit-content;
    padding: 0.4rem 1rem;
    font-size: 1.8rem;
    border-radius: 0 0 2rem 2rem;
    color: $secondary;
    border: 2px solid $primary;
    border-top: 0;
    background: rgba($color: #1a1c20, $alpha: 0.8);
    box-shadow: rgb(26, 28, 32, 0.4) 0px 8px 24px;
    justify-self: center;
  }

  &__content-container {
    width: 100%;
    padding: 0 1.4rem;
    text-align: center;

    h3 {
      margin: 1rem 0 2rem;
    }
    h3,
    p {
      color: $secondary;
    }
  }

  &__button-container {
    display: flex;
    align-self: flex-end;
    justify-content: space-evenly;

    a {
      margin-bottom: 4rem;
      text-decoration: none;
    }
  }
  @media (max-width: 370px) {
    .card-project {
      &__button-container {
        margin-top: 2rem;
        flex-direction: column;
        align-items: center;
  
        & a {
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .card-project {
      &__content-container {
        padding-left: 4rem;
        text-align: start;

        & a {
          padding: 0 4rem;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .card-project__button-container a {
      padding: 0.4rem 6rem;
    }
  }
}
</style>