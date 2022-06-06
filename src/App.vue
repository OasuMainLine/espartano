<template>
  <header>

    <div>
      <Nav />

      <RouterView />

      <Footer />
    </div>
  </header> 
</template>

<script>
import Nav from './components/Nav.vue';
import {RouterView } from 'vue-router';
import Footer from './components/Footer.vue';

  export default {
    components: {Nav, Footer ,RouterView}
  }
</script>

<style lang="scss" scoped>

</style>