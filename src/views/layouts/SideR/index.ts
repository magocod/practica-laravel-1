import SideR from './SideR.vue';

const LazySideR = () => import(/* webpackChunkName: "app_layout" */ './SideR.vue');

export { SideR, LazySideR };
