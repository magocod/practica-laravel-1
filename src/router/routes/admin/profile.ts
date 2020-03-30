import { RouteConfig } from 'vue-router';
// import { RouteConfigExtend } from '../../index';

import {
    LazyDashboard,
} from '../../../components';
// console.log(LazyAuthorList);

export const profileRoutes: RouteConfig[] = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: LazyDashboard,
  },
];
