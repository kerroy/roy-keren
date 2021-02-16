<template>
  <div id="app">
    <main-nav />

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import mainNav from './components/Navegation';

export default {
  name: 'App',
  components: {
    mainNav
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
