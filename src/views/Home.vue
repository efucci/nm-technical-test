<script setup>
import MainContainer from '@/components/MainContainer.vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const loading = computed(() => store.getters.fetchChannelsLoading )
onMounted(async () => {
  await store.dispatch('fetchChannels')
})
</script>

<template>
  <MainContainer :loading="loading">
    <div>Home</div>
  </MainContainer>
</template>