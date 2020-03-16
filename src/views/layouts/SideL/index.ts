import SideL from './SideL.vue';

const LazySideL = () => import(/* webpackChunkName: "app_layout" */ './SideL.vue');

export { SideL, LazySideL };
