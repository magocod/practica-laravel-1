const LazyAuthorList = () => import(/* webpackChunkName: "public_admin" */ './AuthorList.vue');

export { LazyAuthorList };
