// Entrypoint for vuex

import Vuex from 'vuex';
import Vue from 'vue';

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    state: {
        categories: [ { "title": "cat1" }, { "title": "cat2" }, { "title": "cat3" }, { "title": "cat4" } ],
        selectedCategory: -1,
        selectedLocation: -1,
        locations: [
            { "title": "loc1", "address": "nowhere", "lat": "35.0928019", "lng": "32.1626831", "categoriesSelected": [ "cat1" ] },
            { "title": "loc2", "address": "haifa", "lat": "32.7996175", "lng": "34.9817565", "categoriesSelected": [ "cat2" ] },
            { "title": "loc3", "address": "hell", "lat": "32.8417933", "lng": "35.0644239", "categoriesSelected": [ "cat1" ] }
        ]
},
    mutations: {
        // category
        addCategory(state, categoryTitle) {
            state.categories.push({title: categoryTitle});
            state.selectedCategory = -1;
        },
        editCategory(state, categoryTitle) {
            state.categories[state.selectedCategory].title = categoryTitle;
            state.selectedCategory = -1;
        },
        removeCategory(state) {
            state.categories.splice(state.selectedCategory, 1);
            state.selectedCategory = -1;
        },

        // location
        addLocation(state, newData) {
            state.locations.push({title: newData.title, address: newData.address, lat: newData.lat, lng: newData.lng, categoriesSelected: newData.categoriesSelected});
            state.selectedLocation = -1;
        },
        editLocation(state, newData) {
            state.locations[state.selectedLocation].title = newData.title;
            state.locations[state.selectedLocation].address = newData.address;
            state.locations[state.selectedLocation].lat = newData.lat;
            state.locations[state.selectedLocation].lng = newData.lng;
            state.locations[state.selectedLocation].categoriesSelected = newData.categoriesSelected;
            state.selectedLocation = -1;
        },
        removeLocation(state) {
            state.locations.splice(state.selectedLocation, 1);
            state.selectedLocation = -1;
        },

        // manage location list
        ascSorting(state) {
            state.locations.sort((a, b) => (a.title > b.title) ? 1 : -1 );
        }
    }
});