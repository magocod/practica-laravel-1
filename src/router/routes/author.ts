// no requieren autenticacion

// exportar arreglo
export default [
  {
    path: '/authors',
    name: 'author_list',
    component: () => import(/* webpackChunkName: "author" */ '@/components/author/List.vue'),
  },
];
