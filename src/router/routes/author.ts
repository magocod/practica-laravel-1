// no requieren autenticacion

import {
    LazyAuthorList,
} from '@/components';
// console.log(LazyAuthorList);

// exportar arreglo
export default [
  {
    path: '/authors',
    name: 'author_list',
    component: LazyAuthorList,
  },
];
