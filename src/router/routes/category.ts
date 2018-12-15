// no requieren autenticacion

// exportar arreglo
export default [
  {
    path: '/category',
    name: 'category_list',
    component: () => import(/* webpackChunkName: "category" */ '@/components/category/List.vue'),
  },
];
