<template>
  <div id="category-view">
    <h1>Category View</h1>
    <label>Title:</label><p>{{ this.$store.state.categories[this.$store.state.selectedCategory].title }}</p>
  </div>
</template>

<script>
export default {
  name: "categoryView"
};
</script>
