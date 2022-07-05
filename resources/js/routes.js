import VueRouter from "vue-router";
import Vue from 'vue';
Vue.use(VueRouter);

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cabinet from "./components/auth/Cabinet";
import MainComponent from "./components/MainComponent";
import New from "./components/New";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Addnews from "./components/Addnews";
import Direction from "./components/Direction";
import Headsofdepartments from "./components/Headsofdepartments";
import History from "./components/History";
import NewsIndex from "./components/news/Index"

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
        {
            path:"/about",
            component: About,
            name: 'about',
            meta: {
                layout: 'Default'
            }
        },
        {
            path:"/certificate",
            component: Certificate,
            name: 'certificate',
            meta: {
                layout: 'Default'
            },
        },
        {
            path:"/direction",
            component: Direction,
            name: 'direction',
            meta: {
                layout: 'Default'
            },
        },
        {
            path:"/heads-of-departments",
            component: Headsofdepartments,
            name: 'headsofdepartments',
            meta: {
                layout: 'Default'
            },
        },
        {
            path:"/history",
            component: History,
            name: 'history',
            meta: {
                layout: 'Default'
            },
        },
        {
            path:"/addnews",
            component: Addnews,
            name: 'addnews',
            meta: {
                layout: 'Default'
            },
        },
        {
            path:"/news",
            component: NewsIndex,
            name: 'news_index',
            meta: {
                layout: 'Default'
            },
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
