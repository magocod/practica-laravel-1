import GenericList from './GenericList.vue';

const LazyGenericList = () => import(/* webpackChunkName: "partials" */ './GenericList.vue');

export { GenericList, LazyGenericList };
export default GenericList;
