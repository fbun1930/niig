import VueRouter from "vue-router";
import Vue from 'vue';
Vue.use(VueRouter);

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cabinet from "./components/auth/Cabinet";
import MainComponent from "./components/MainComponent";
import New from "./components/New";


const router = new VueRouter({

    mode:'history',
    routes:[

        {
            path:"/register",
            component: Register,
            name: 'register'
        },
        {
            path:"/login",
            component: Login,
            name: 'login',
            meta: {
                layout: 'Empty'
            }
        },
        {
            path:"/cabinet",
            component: Cabinet,
            name: 'cabinet',
            meta: {
                layout: 'Default'
            }
        },
        {
            path:"",
            component: MainComponent,
            name: 'main',
            meta: {
                layout: 'Default'
            }
        },
        {
            path:"/new",
            component: New,
            name: 'new',
            meta: {
                layout: 'Default'
            }
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
