<template>
  <div>
    <nav id="app-nav" class="navbar navbar-expand navbar-dark bg-dark" v-if="this.$route.path.includes('categories')">
      <router-link to="/categories" class="navbar-brand">Categories</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/categories/add" class="nav-link">Add</router-link>
        </li>
        <li class="nav-item">
          <router-link to="categories//view" class="nav-link" :class="setClassDisabled()">View</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/categories/edit" class="nav-link" :class="setClassDisabled()">Edit</router-link>
        </li>
        <li class="nav-item">
          <div class="nav-link" :class="setClassDisabled()" @click="deleteCategory">Delete cat</div>
        </li>
      </div>
    </nav>

    <nav id="app-nav" class="navbar navbar-expand navbar-dark bg-dark" v-else>
      <router-link to="/locations" class="navbar-brand">Locations</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/locations/add" class="nav-link">Add</router-link>
        </li>
        <li class="nav-item">
          <router-link to="locations/view" class="nav-link" :class="setClassDisabled()">View</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/locations/edit" class="nav-link" :class="setClassDisabled()">Edit</router-link>
        </li>
        <li class="nav-item">
          <div class="nav-link" :class="setClassDisabled()" @click="deleteLocation">Delete loc</div>
        </li>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app-nav",
  methods: {
    deleteCategory() {
      this.$store.commit('removeCategory');
      this.$store.state.selectedCategory = -1;
    },
    deleteLocation() {
      this.$store.commit('removeLocation');
      this.$store.state.selectedLocation = -1;
    },
    setClassDisabled() {
      if (this.$store.state.selectedCategory!=-1 || this.$store.state.selectedLocation!=-1) {
        return '';
      }

      return "disabled";
    }
  },
};
</script>
