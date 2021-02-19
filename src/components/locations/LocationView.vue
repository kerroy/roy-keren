<template>
  <div id="location-view">
    <h1>Location View</h1>
    <div class="location-details-box">
      <label>Title:</label><p>{{ locationDetails.title }}</p>
      <label>Address:</label><p>{{ locationDetails.address }}</p>
      <label>Co-ordinates:</label><p>{{ locationDetails.lat }} x {{ locationDetails.lng }}</p>
      <label>Category:</label><p>{{ locationDetails.category }}</p>
    </div>
    <!-- -->
    <div style="height: 500px; width: 100%">
      <l-map
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 80%"
      >
        <l-tile-layer
            :url="url"
            :attribution="attribution"
        />
        <l-marker :lat-lng="withTooltip">
          <l-tooltip :options="{ permanent: true, interactive: true }">
            <div @click="innerClick">
              {{ locationDetails.title }}
            </div>
          </l-tooltip>
        </l-marker>
      </l-map>
    </div>
    <!-- -->
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";


export default {
  name: "locationView",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      locationDetails: this.$store.state.locations[this.$store.state.selectedLocation],
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withTooltip: latLng(47.41422, -1.250482),
      // currentCenter: latLng(47.41322, -1.219482),
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },
  methods: {
    innerClick() {
      alert("Click!");
    }
  }
};
</script>

<style>
.location-details-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
