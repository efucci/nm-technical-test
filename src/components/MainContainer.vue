<script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
    <main class="main-container" >
      <slot />
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