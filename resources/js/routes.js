import VueRouter from "vue-router";
import Vue from 'vue';
Vue.use(VueRouter);

import ExampleComponent from "./components/ExampleComponent";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cabinet from "./components/auth/Cabinet";


const router = new VueRouter({

    mode:'history',
    routes:[
        {
            path:'/example',
            component: ExampleComponent,
        },
        {
            path:"/register",
            component: Register,
            name: 'register'

        },
        {
            path:"/login",
            component: Login,
            name: 'login'

        },
        {
            path:"/cabinet",
            component: Cabinet,
            name: 'cabinet'

        },

    ]
});
router.beforeEach((to, from, next) => {
    return next();
});
export default router
