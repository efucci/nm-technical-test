<template>
  <header>
    <div class="inner">
      <font-awesome-icon icon="user" size="xl" />
      <font-awesome-icon icon="fa-face-smile" class="color-primary" size="xl" />
      <font-awesome-icon icon="fa-magnifying-glass" size="xl" />
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  height: $header-height;

  .inner {
    padding: .8rem;
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  svg {
    cursor: pointer;
    &:hover {
      color: $primary;
    }
  }
}
</style>