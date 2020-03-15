import AuthorList from './AuthorList.vue';

const LazyAuthorList = () => import(/* webpackChunkName: "author" */ './AuthorList.vue');

export { AuthorList, LazyAuthorList };
export default AuthorList;
