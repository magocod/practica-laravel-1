import ThemeList from './ThemeList.vue';

const LazyThemeList = () => import(/* webpackChunkName: "theme" */ './ThemeList.vue');

export { ThemeList, LazyThemeList };
export default ThemeList;
