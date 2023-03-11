<script setup>
import { getEpg } from '@/services.js'

const epgData = await getEpg()
console.log('data', epgData)
</script>

<template>
  <div>Hello !</div>
</template>
