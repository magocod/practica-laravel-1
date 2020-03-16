import TitleSearch from './TitleSearch.vue';

const LazyTitleSearch = () => import(/* webpackChunkName: "title" */ './TitleSearch.vue');

export { TitleSearch, LazyTitleSearch };
export default TitleSearch;
