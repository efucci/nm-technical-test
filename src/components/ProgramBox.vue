<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getBoxWidth } from '@/utils.js'

const props = defineProps({ program: Object })

const currentTime = new Date()
const startTime = new Date(props.program.start)
const endTime = new Date(props.program.end)


const isCurrent = computed(() => {
  return currentTime > startTime && currentTime < endTime
})

const boxSize = computed(() => {
  return getBoxWidth(startTime, endTime)
})

const router = useRouter()

function goToDetailsPage () {
  router.push({ name: 'details-page', params: { program: props.program.id } })
}
</script>

<template>
  <button :ref="program.id"
    class="box" :class="{'current': isCurrent}"
    @click="goToDetailsPage()"
    :style="{'min-width': boxSize + 'px'}"
  >
  <label>{{ program.title }}</label>
  </button>
</template>

<style lang="scss" scoped>
.box {
  border: .2px solid $light-gray;
  background-color: black;
  color: white;
  &.current {
    background-color: $light-gray;
  }
  label {
    text-overflow: ellipsis;
  }
}
</style>