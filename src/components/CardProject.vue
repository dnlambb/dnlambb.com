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
      <a class="button-primary" button-glitch="Repo" :href="item.urlRepo">Repo</a>
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
  height: 400px;
  border-radius: 8px;
  border: 2px solid $primary;
  background: $terciary;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 50% 20%;
  justify-content: space-evenly;

  &__tech-tag {
    width: fit-content;
    height: fit-content;
    padding: 0.25rem 0.625rem;
    font-size: calculateRem(18px);
    border-radius: 0 0 20px 20px;
    color: $secondary;
    border: 2px solid $primary;
    border-top: 0;
    background: rgba($color: #1a1c20, $alpha: 0.8);
    box-shadow: rgb(26, 28, 32, 0.4) 0px 8px 24px;
    backdrop-filter: blur(3px);
    justify-self: center;
  }

  &__content-container {
    width: 100%;
    height: fit-content;
    padding: 0 0.875rem;
    text-align: center;

    h3 {
      margin: 0.625rem 0 1.25rem;
    }
    h3,
    p {
      color: $secondary;
    }
    p {
      margin: 0 auto;
      line-height: 1.5;
    }
  }

  &__button-container {
    display: flex;
    align-self: flex-end;
    justify-content: space-evenly;
    
    a {
      margin-bottom: 2.5rem;
      text-decoration: none;
    }
  }
}
@media (max-width: 370px) {
  .card-project {
    height: 450px;
    &__content-container {
      p {
        padding: 0 0.625rem;
      }
    }
    &__button-container {
      margin-top: 1.25rem;
      flex-direction: column;
      align-items: center;
      & a {
        margin-bottom: 1.25rem;
      }
    }
  }
}
@media (min-width: 768px) {
  .card-project {
    &__content-container {
      padding: 0 2.5rem;
      text-align: start;
      p {
        margin: 0;
      }
      & a {
        padding: 0 2.5rem;
      }
    }
  }
}
@media (min-width: 1440px) {
  .card-project {
    max-width: 56.25rem;
  }
  .card-project__button-container a {
    padding: 0.25rem 3.75rem;
  }
}

</style>