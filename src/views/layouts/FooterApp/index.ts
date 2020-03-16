import FooterApp from './FooterApp.vue';

const LazyFooterApp = () => import(/* webpackChunkName: "app_layout" */ './FooterApp.vue');

export { FooterApp, LazyFooterApp };
