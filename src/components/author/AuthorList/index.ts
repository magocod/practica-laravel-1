const LazyAuthorList = () => import(/* webpackChunkName: "author" */ './AuthorList.vue');

export { LazyAuthorList };
