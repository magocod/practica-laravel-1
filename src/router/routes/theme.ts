import { RouteConfig } from 'vue-router';

import {
  LazyThemeList,
} from '../../components';

export const themeRoutes: RouteConfig[] = [
  {
    path: '/themes',
    name: 'theme_list',
    component: LazyThemeList,
  },
];
