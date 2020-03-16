import CollectionList from './CollectionList.vue';

const LazyCollectionList = () => import(/* webpackChunkName: "collection" */ './CollectionList.vue');

export { CollectionList, LazyCollectionList };
export default CollectionList;
