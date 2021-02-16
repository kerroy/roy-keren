<template>
    <nav id="app-nav" class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Category</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/categories/view" class="nav-link" :class="$store.state.selectedCategory==-1?'disabled':''">View Category</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/categories/edit" class="nav-link" :class="$store.state.selectedCategory==-1?'disabled':''">Edit Category</router-link>
        </li>
        <li class="nav-item">
          <div class="nav-link" :class="$store.state.selectedCategory==-1?'disabled':''" @click="deleteCategory">Delete Category</div>
        </li>
      </div>
    </nav>
</template>

<script>
export default {
  name: "app-nav",
  methods: {
    deleteCategory() {
      this.$store.commit('removeCategory');
      this.$store.state.selectedCategory = -1;
    },
  },
};
</script>
