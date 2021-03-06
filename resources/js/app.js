require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue';

import router from './routes'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy, faPencilAlt, faPlusSquare, faTrash, faFilePdf, faLocationDot, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store/index'

import Moment from 'vue-moment';

Vue.component('app', require('./App.vue').default);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use( Moment );

library.add(faCopy, faFilePdf)
Vue.component('font-awesome-icon', FontAwesomeIcon);
window.$ = require('jquery')
window.JQuery = require('jquery')

const app = new Vue({
    el:'#app',
    router,
    store
});
