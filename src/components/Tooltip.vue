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
  font-size: calculateRem(26px);
  color: $secondary;
  
  &:before,
  &:after {
    position: absolute;
    content: ‘’;
    opacity: 0;
    transition: all 0.4s ease;
  }
  &:before {
    top: -24px;
    transform: translateY(8px);
  }
  &:after {
    content: attr(string-tooltip);
    top: -50px;
    left: 0;
    min-width: 40px;
    max-width: max-content;
    height: fit-content;
    padding: 10px;
    font-size: calculateRem(14px);
    font-weight: 400;
    text-align: center;
    letter-spacing: calculateRem(1.6px);
    border-radius: 8px;
    border: 1px solid $primary;
    background: rgba($color: #1a1c20, $alpha: 0.6);
    backdrop-filter: blur(3px);
    transform: translateY(8px);
  }
  &:hover::before,
  &:hover::after {
   opacity: 1;
   transform: translateY(-0.5px);
  }
}
</style>