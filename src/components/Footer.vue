<template>
  <footer>
    <div class="inner">
      <font-awesome-icon icon="fa-house" size="xl" />
      <font-awesome-icon icon="fa-play" size="xl" />
      <font-awesome-icon icon="fa-list" size="xl" />
      <font-awesome-icon icon="fa-rotate-left" size="xl" />
      <font-awesome-icon icon="fa-question" size="xl" />
    </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #202020;
  height: $footer-height;
  .inner {
    display: flex;
    justify-content: space-between;
    padding: .8rem;
  }
}
</style>

