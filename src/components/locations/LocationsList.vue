<template>
  <div id="locations-list">
    <h1>Locations List</h1>

    <div id="manag-box">
      <div class="mr-4">
        <button @click.prevent="sortLocations">Sort a-Z</button>
      </div>

      <div class="mr-4">
        <label for="groupBy" class="mr-1">Group by:</label>
        <select id="groupBy" v-model="groupByCategory" @change="groupByCat">
          <option v-for="item in categories" v-bind:key="item.title" :value="item.title">{{ item.title }}</option>
        </select>
      </div>

      <div class="mr-4">
        <label for="filterBy" class="mr-1">Filter By:</label>
        <select id="filterBy" v-model="filterByCategory" @change="filterByCat">
          <option v-for="item in categories" v-bind:key="item.title" :value="item.title">{{ item.title }}</option>
        </select>
      </div>

      <div>
        <button @click.prevent="resetLocations">Reset</button>
      </div>
    </div>

    <div v-if="!locationsList.length">No Locations found.</div>
    <div e-else class="list-group">
      <ul>
        <li class="list-group-item"
            v-for="(location, index) in locationsList"
            :key="index"
            :class="{ active: index == currentIndex }"
            @click="setActiveTutorial(location, index)"
        >
          <div class="location-details-box">
            <label>Name:</label><p>{{ location.title }}</p>
            <label>Address:</label><p>{{ location.address }}</p>
            <label>Co-ordinates:</label><p>{{ location.lat }} x {{ location.lng }}</p>
            <label>Category:</label>
            <div>
              <p v-for="catName in location.categoriesSelected" :key="catName">
                {{ catName }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "locationsList",
  data() {
    return {
      locationsList: this.$store.state.locations,
      currentLocation: null,
      currentIndex: -1,
      title: "",
      address: "",
      coordinates: "",
      category: "",

      categories: this.$store.state.categories,
      groupByCategory: "",
      filterByCategory: ""
    };
  },
  methods: {
    setActiveTutorial(location, index) {
      this.currentLocation = location;
      this.currentIndex = index;
      this.$store.state.selectedLocation = index;
    },
    sortLocations() {
      this.locationsList.sort((a, b) => (a.title > b.title) ? 1 : -1);
    },
    resetLocations() {
      this.groupByCategory = "";
      this.filterByCategory = "";
      this.locationsList = this.$store.state.locations;
    },
    groupByCat() {
      // this.locationsList = this.$store.state.locations; // reset the list
      const result = [];
      const groupy = [];

      function isExist(categoriesArray, groupByCategory) {
        for(let i=0; i<categoriesArray.length; i++) {
          if (categoriesArray[i]==groupByCategory) {
            return true;
          }
        }
        return false;
      }

      this.locationsList.forEach(item => {
        console.log(item);
        if (isExist(item.categoriesSelected, this.groupByCategory)) {
          groupy.push(item);
        }
        else {
          result.push(item);
        }
      })

      this.locationsList = groupy.concat(result);
    },
    filterByCat() {
      // this.locationsList = this.$store.state.locations; // reset the list

      function isExist(categoriesArray, groupByCategory) {
        for(let i=0; i<categoriesArray.length; i++) {
          if (categoriesArray[i]==groupByCategory) {
            return true;
          }
        }

        return false;
      }

      const result = [];
      this.locationsList.forEach(item => {
        if (isExist(item.categoriesSelected, this.filterByCategory)) {
          result.push(item);
        }
      })

      this.locationsList=result;
    }
  }
};
</script>

<style>
li {
  cursor: pointer;
}

#manag-box {
  display: flex;
  justify-content: center;
}

.location-details-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>