import CollectionDetail from './CollectionDetail.vue';

const LazyCollectionDetail = () => import(/* webpackChunkName: "collection" */ './CollectionDetail.vue');

export { CollectionDetail, LazyCollectionDetail };
export default CollectionDetail;
