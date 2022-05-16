require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue';

import router from './routes'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy, faPencilAlt, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import Moment from 'vue-moment';

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"


Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use( Moment );

Vue.component('font-awesome-icon', FontAwesomeIcon);

const app = new Vue({
    el:'#app',
    router,
});
