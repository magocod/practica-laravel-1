import { RouteConfig } from 'vue-router';

import {
  LazyResourceList,
} from '@/components';

export const resourceRoutes: RouteConfig[] = [
  {
    path: '/resources/:key',
    name: 'resource_list',
    component: LazyResourceList,
  },
];
