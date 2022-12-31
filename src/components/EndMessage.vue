<template>
  <div class="message-container">
    <p class="message-container__message">{{ message }}</p>

    <svg id="heart" height="0" width="0">
      <defs>
        <clipPath id="svgPath">
          <path
            d="M20,35.09,4.55,19.64a8.5,8.5,0,0,1-.13-12l.13-.13a8.72,8.72,0,0,1,12.14,0L20,10.79l3.3-3.3a8.09,8.09,0,0,1,5.83-2.58,8.89,8.89,0,0,1,6.31,2.58,8.5,8.5,0,0,1,.13,12l-.13.13Z"
          />
        </clipPath>
      </defs>
    </svg>

    <div class="heart-container">
      <svg width="40" height="40" viewBox="0 0 40 40" class="heart-stroke">
        <path
          d="M20,35.07,4.55,19.62a8.5,8.5,0,0,1-.12-12l.12-.12a8.72,8.72,0,0,1,12.14,0L20,10.77l3.3-3.3A8.09,8.09,0,0,1,29.13,4.9a8.89,8.89,0,0,1,6.31,2.58,8.5,8.5,0,0,1,.12,12l-.12.12ZM10.64,7.13A6.44,6.44,0,0,0,6.07,18.19L20,32.06,33.94,18.12A6.44,6.44,0,0,0,34,9l0,0a6.44,6.44,0,0,0-4.77-1.85A6,6,0,0,0,24.83,9L20,13.78,15.21,9A6.44,6.44,0,0,0,10.64,7.13Z"
        />
      </svg>

      <a class="heart-clip"></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EndMessage",
  props: {
    message: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors";

.message-container {
  width: fit-content;
  margin: 2.5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.313rem;

  &__message {
    width: fit-content;
    color: $secondary;
  }
  .heart-container {
    position: relative;
    width: 40px;
    height: 40px;
  }

  .heart-clip {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    clip-path: url(#svgPath);
    cursor: pointer;

    &:hover {
      animation: pulse 0.6s 0.3s infinite;

      &::before {
        transform: scale(1);
        opacity: 1;
      }
    }

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: $primary;
      opacity: 0;
      transform: scale(0);
      transition: transform 0.2s linear, opacity 0.2s linear;
      transform-origin: center 60%;
    }
    &.active {
      animation: pulse 0.6s 0.3s forwards;
    }
  }

  .heart-stroke {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    fill: $primary;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  30% {
    transform: scale(1.2);
  }

  60% {
    transform: scale(1);
  }
}
@media (min-width: 768px) {
  .message-container {
    flex-direction: row;
  }
}
</style>
