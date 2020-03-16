import Home from './Home.vue';

const LazyHome = () => import(/* webpackChunkName: "home" */ './Home.vue');

export { Home, LazyHome };
