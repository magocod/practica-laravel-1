import { RouteConfig } from 'vue-router';

import {
  LazyTitleSearch,
} from '../../../components';

export const titleRoutes: RouteConfig[] = [
  {
    path: 'title',
    name: 'title_search',
    component: LazyTitleSearch,
  },
];
