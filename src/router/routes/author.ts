import { RouteConfig } from 'vue-router';

import {
    LazyAuthorList,
} from '../../components';
// console.log(LazyAuthorList);

export const authorRoutes: RouteConfig[] = [
  {
    path: '/authors',
    name: 'author_list',
    component: LazyAuthorList,
  },
];
