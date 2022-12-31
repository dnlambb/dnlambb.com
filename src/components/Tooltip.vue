<template>
  <div class="tooltip">
    <span class="tooltip__text">{{stringTooltip}}</span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tooltip",
  props: {
    stringTooltip: String,
  },
};
</script>

<style lang="scss">
@import "../styles/colors.scss";
.tooltip {
  position: relative;
  display: inline-block;
  width: fit-content;
  &__text {
    z-index: 1;
    position: absolute;
    visibility: hidden;
    width: fit-content;
    bottom: 120%;
    left: 0;
    margin-left: 0;
    padding: 0.375rem 1.25rem;
    text-align: center;
    border-radius: 4px;
    color: $secondary;
    background-color: $primary;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
  &:hover .tooltip__text {
    visibility: visible;
  }
}
</style>