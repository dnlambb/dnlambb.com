<template>
  <span class="tooltip" :string-tooltip="String">
    <slot></slot>
  </span>
</template>

<script lang="ts">
export default {
  name: "Tooltip",
  props: {
    String,
  },
};
</script>

<style lang="scss">
@import "../styles/colors.scss";

.tooltip {
  width: fit-content;
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 2.6rem;
  color: $secondary;
  
  &:before,
  &:after {
    position: absolute;
    content: ‘’;
    opacity: 0;
    transition: all 0.4s ease;
  }
  &:before {
    top: -1.5rem;
    transform: translateY(0.5rem);
  }
  &:after {
    content: attr(string-tooltip);
    top: -4rem;
    left: 0;
    min-width: 4rem;
    max-width: max-content;
    height: fit-content;
    padding: 1rem;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.1rem;
    border-radius: 0.5rem;
    border: 1px solid $primary;
    background: rgba($color: #1a1c20, $alpha: 0.6);
    backdrop-filter: blur(3px);
    transform: translateY(0.5rem);
  }
  &:hover::before,
  &:hover::after {
   opacity: 1;
   transform: translateY(-0.5rem);
  }
}
</style>