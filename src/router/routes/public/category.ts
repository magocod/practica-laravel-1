import { RouteConfig } from 'vue-router';

import {
    LazyCategoryList,
} from '../../../components';

// exportar arreglo
export const categoryRoutes: RouteConfig[] = [
  {
    path: 'categories',
    name: 'category_list',
    component: LazyCategoryList,
  },
];
