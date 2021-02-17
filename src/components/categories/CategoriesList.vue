<template>
  <div id="categories-list">
    <h1>Categories List</h1>
<!--    <div>{{ $store.state.categories}}</div>-->

    <div v-if="!$store.state.categories.length">No Categories found.</div>
      <ul e-else class="list-group">
        <li class="list-group-item"
            v-for="(category, index) in $store.state.categories"
            :key="index"
            :class="{ active: index == currentIndex }"
            @click="setActiveTutorial(category, index)"
        >
          {{ category.title }}
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: "categoriesList",
  data() {
    return {
      currentCategory: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    setActiveTutorial(category, index) {
      this.currentCategory = category;
      this.currentIndex = index;
      this.$store.state.selectedCategory = index;
    }
  },
};
</script>

<style>
li {
  cursor: pointer;
}
</style>