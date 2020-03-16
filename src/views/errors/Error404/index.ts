import Error404 from './Error404.vue';

const LazyError404 = () => import(/* webpackChunkName: "errors" */ './Error404.vue');

export { Error404, LazyError404 };
export default Error404;
