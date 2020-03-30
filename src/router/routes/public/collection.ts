import { RouteConfig } from 'vue-router';

import {
    LazyCollectionList,
    LazyCollectionDetail,
} from '../../../components';

export const collectionRoutes: RouteConfig[] = [
  {
    path: 'collections/:key',
    name: 'collection_list',
    component: LazyCollectionList,
  },
  {
    path: 'collection/:id',
    name: 'collection_detail',
    component: LazyCollectionDetail,
  },
];
