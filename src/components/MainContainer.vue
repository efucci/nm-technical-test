<script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  import Spinner from '@/components/Spinner.vue'
  
  const props = defineProps({
    loading: {
      type: Boolean,
      default: false
    },
  })
</script>

<template>
  <Navbar />
    <main class="main-container" >
      <Spinner v-if="loading" class="spinner" />
      <div v-else>
        <slot />
      </div>
    </main>
  <Footer />
</template>
<style scoped>
.main-container {
  display: flex;
  padding: 3rem 0;
  box-sizing: border-box;
  width: 100vw;
}
</style>