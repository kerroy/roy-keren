import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        // categories
        {
            // path: "/",
            path: "/categories",
            alias: "/",
            name: "categoriesList",
            component: () => import("./components/categories/CategoriesList")
        },
        {
            path: "/categories/view",
            name: "categoryView",
            component: () => import("./components/categories/CategoryView")
        },
        {
            path: "/categories/edit",
            name: "categoryEdit",
            component: () => import("./components/categories/EditCategory")
        },
        {
            path: "/categories/add",
            name: "addCategory",
            component: () => import("./components/categories/AddCategory")
        },
        // locations
        {
            path: "/locations",
            name: "locationsList",
            component: () => import("./components/locations/LocationsList")
        },
        {
            path: "/locations/add",
            name: "addLocation",
            component: () => import("./components/locations/AddLocation")
        },
        {
            path: "/locations/view",
            name: "locationView",
            component: () => import("./components/locations/LocationView")
        },
        {
            path: "/locations/edit",
            name: "locationEdit",
            component: () => import("./components/locations/EditLocation")
        },
    ]
});
