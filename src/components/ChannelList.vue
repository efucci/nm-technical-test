<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const channels = computed(() => store.state.channels)
</script>

<template>
  <div class="channels">
    <div class="channel-label">XXXX</div>
    <div class="channel" v-for="channel in channels" :key="channel.id">
      {{ channel.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.channels {
  display: flex;
  flex-direction: column;
  box-shadow:  5px 5px 10px black;
  z-index: 1;
  .channel-label {
    padding: 0.5rem 1rem;
    border-top: 1px solid black;
  }
  .channel {
    height: $box_height;
    width: 100px;
    background-color: $dark-gray;
    border-top: .5px solid $light-gray;
    &:last-child {
      border-bottom: .5px solid $light-gray;
    }
  }
}
</style>