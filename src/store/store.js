// Entrypoint for vuex

import Vuex from 'vuex';
import Vue from 'vue';

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    state: {
        viewing: "categories",
        categories: [],
        selectedCategory: -1,
        locations: [
            {title: "haifa", address: "sex drive 69", coordinates: "10.00 x 11.11", category: "1"}
        ], //title, address, coordinates, category/ies
    },
    mutations: {
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
    }
});