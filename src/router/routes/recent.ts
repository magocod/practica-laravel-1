import { RouteConfig } from 'vue-router';

import {
    LazyRecentList,
} from '../../components';

export const recentRoutes: RouteConfig[] = [
  {
    path: '/recents',
    name: 'recents',
    component: LazyRecentList,
  },
];
