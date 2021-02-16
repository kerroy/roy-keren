import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/categories",
            name: "categoriesList",
            component: () => import("./components/CategoriesList")
        },
        {
            path: "/categories/view",
            name: "categoryView",
            component: () => import("./components/CategoryView")
        },
        {
            path: "/categories/edit",
            name: "categoryEdit",
            component: () => import("./components/EditCategory")
        },
        {
            path: "/add",
            name: "addCategory",
            component: () => import("./components/AddCategory")
        }
    ]
});
