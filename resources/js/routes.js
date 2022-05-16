import VueRouter from "vue-router";
import Vue from 'vue';
Vue.use(VueRouter);

import ExampleComponent from "./components/ExampleComponent";


const router = new VueRouter({

    mode:'history',
    routes:[
        {
            path:'/example',
            component: ExampleComponent,
        },

    ]
});
router.beforeEach((to, from, next) => {
    return next();
});
export default router
