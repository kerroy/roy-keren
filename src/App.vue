<template>
  <div id="app">
    <main-nav />

    <div class="container mt-3">
      <router-view />
    </div>

    <bottom-nav />
  </div>
</template>

<script>
import mainNav from './components/Navegation';
import BottomNav from './components/BottomNav';

export default {
  name: 'App',
  components: {
    mainNav,
    BottomNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
