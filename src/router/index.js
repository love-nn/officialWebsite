import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/home',
            component: resolve => require(['../components/homePage/home.vue'], resolve),
        },
        {
            path: '/404',
            component: resolve => require(['../components/commonPage/404.vue'], resolve),
        },{
            path:'/building',
            component: resolve => require(['../components/commonPage/building.vue'],resolve),
        },
        {
            path:'*',
            redirect:'/404'
        },{
            path:'',
            component:resolve => require(['../components/redrock/index.vue'],resolve),
        }
    ]
})