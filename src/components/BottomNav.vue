<template>
  <nav id="bottom-nav" class="navbar fixed-bottom navbar-light bg-light">
    <div class="m-auto">
        <router-link to="/categories" class="btn btn-sm btn-outline-secondary mr-4"
                     :class="this.$route.path=='/'||this.$route.path.includes('categories')?'active':''" >Categories</router-link>
        <router-link to="/locations" class="btn btn-sm btn-outline-secondary"
                     :class="this.$route.path.includes('locations')?'active':''" >Locations</router-link>
    </div>
  </nav>
</template>

<script>

export default {
  name: "bottom-nav"
};
</script>
