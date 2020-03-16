import RecentList from './RecentList.vue';

const LazyRecentList = () => import(/* webpackChunkName: "recent" */ './RecentList.vue');

export { RecentList, LazyRecentList };
export default RecentList;
