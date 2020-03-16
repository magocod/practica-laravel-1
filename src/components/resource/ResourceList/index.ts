import ResourceList from './ResourceList.vue';

const LazyResourceList = () => import(/* webpackChunkName: "recent" */ './ResourceList.vue');

export { ResourceList, LazyResourceList };
export default ResourceList;
