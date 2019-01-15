import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import AnimalDetails from './components/AnimalDetails';
import AnimalList from './components/AnimalList';

Vue.config.productionTip = false;

const routes = [
    {path: '/animal/:name', component: AnimalDetails},
    {path:'/', component: AnimalList}
];

const router = new VueRouter({routes});

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
