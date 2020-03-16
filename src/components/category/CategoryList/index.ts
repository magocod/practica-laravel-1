import CategoryList from './CategoryList.vue';

const LazyCategoryList = () => import(/* webpackChunkName: "category" */ './CategoryList.vue');

export { CategoryList, LazyCategoryList };
export default CategoryList;
