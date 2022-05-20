import VueRouter from "vue-router";
import Vue from 'vue';
Vue.use(VueRouter);

import ExampleComponent from "./components/ExampleComponent";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cabinet from "./components/auth/Cabinet";
import MainComponent from "./components/MainComponent";


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
        {
            path:"",
            component: MainComponent,
            name: 'main'

        },

    ]
});
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token');
    if(!token){
        if(to.name === 'login' || to.name === 'main'){
            return next();
        }else{
            return next({name:"login"})
        }
    }else{
        if(to.name === 'login') {
            return next({name: "cabinet"});
        }else{
            return next();
        }
    }
    return next();
});
export default router
