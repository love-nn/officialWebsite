import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "",
            redirect: "home"
        },
        {
            path:'/teacher',
            component: resolve => require(['../components/commonPage/teacher.vue'], resolve),
        },
        {
            path: '/home',
            component: resolve => require(['../components/homePage/home.vue'], resolve),
        },
        {
            path: '/sheji',
            component: resolve => require(['../components/commonPage/sheji.vue'], resolve),
        }, {
            path: '/qianduan',
            component: resolve => require(['../components/commonPage/qianduan.vue'], resolve),
        }, {
            path: '/houduan',
            component: resolve => require(['../components/commonPage/houduan.vue'], resolve),
        }, {
            path: '/yunying',
            component: resolve => require(['../components/commonPage/yunying.vue'], resolve),
        }, {
            path: '/chanpin',
            component: resolve => require(['../components/commonPage/chanpin.vue'], resolve),
        }, {
            path: '/yidong',
            component: resolve => require(['../components/commonPage/yidong.vue'], resolve),
        }, {
            path: '/404',
            component: resolve => require(['../components/commonPage/404.vue'], resolve),
        },{
            path:'/building',
            component: resolve => require(['../components/commonPage/building.vue'],resolve),
        },{
            path:'/detail',
            component: resolve => require(['../components/commonPage/infoDetail.vue'],resolve),
        },
        {
            path:'*',
            redirect:'/404'
        },{
            path:'/test',
            component:resolve => require(['../components/homePage/test.vue'],resolve),
        }
    ]
})