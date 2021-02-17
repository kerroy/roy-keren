<template>
<!--  <nav id="app-nav" class="navbar navbar-expand navbar-dark bg-dark">-->
  <nav id="bottom-nav" class="navbar fixed-bottom navbar-light bg-light">
    <div class="m-auto">
      {{ this.$store.state.viewing }}
        <router-link to="/categories" class="btn btn-sm btn-outline-secondary mr-4"
                     :class="this.$route.path==='/categories'?'active':''" >Categories</router-link>
        <router-link to="/locations" class="btn btn-sm btn-outline-secondary"
                     :class="this.$route.path==='/locations'?'active':''" >Locations</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "bottom-nav"
};
</script>
