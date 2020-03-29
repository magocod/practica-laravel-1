// import { RouteConfig } from 'vue-router';
import { RouteConfigExtend } from '../../index';

import {
    LazyAuthorList,
} from '../../../components';
// console.log(LazyAuthorList);

export const authorRoutes: RouteConfigExtend[] = [
  {
    path: 'authors',
    name: 'author_list',
    component: LazyAuthorList,
  },
];
