import { RouteConfig } from 'vue-router';

import {
    LazyUnefa,
} from '../../components';

export const infoRoutes: RouteConfig[] = [
  {
    path: '/unefa',
    name: 'footer_unefa',
    component: LazyUnefa,
  },
];
