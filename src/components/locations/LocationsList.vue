<template>
  <div id="locations-list">
    <h1>Locations List</h1>

    <div v-if="!$store.state.locations.length">No Locations found.</div>
      <ul e-else class="list-group">
        <li class="list-group-item"
            v-for="(location, index) in $store.state.locations"
            :key="index"
            :class="{ active: index == currentIndex }"
            @click="setActiveTutorial(location, index)"
        >
          <div>Name: {{ location.title }}</div>
          <div>Address: {{ location.address }}</div>
          <div>Co-ordinates: {{ location.coordinates }}</div>
          <div>Category: {{ location.category }}</div>
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: "locationsList",
  data() {
    return {
      currentLocation: null,
      currentIndex: -1,
      title: "",
      address: "",
      coordinates: "",
      category: ""
    };
  },
  methods: {
    setActiveTutorial(location, index) {
      this.currentLocation = location;
      this.currentIndex = index;
      this.$store.state.selectedLocation = index;
    }
  },
};
</script>

<style>
li {
  cursor: pointer;
}
</style>