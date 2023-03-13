<script setup>
import { getDayName, getFormattedDate } from '@/utils.js'

const props = defineProps({ currentDate: Number })
const date = new Date(props.currentDate)

const dayName = getDayName(date)
const formatDate = getFormattedDate(date)
</script>

<template>
  <div class="date-container">
    <span>{{ dayName }}</span>
    <span>{{ formatDate }}</span>
  </div>
</template>

<style scoped>
.date-container {
  display: flex;
  flex-direction: column;
}
</style>
