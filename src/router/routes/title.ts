// no requieren autenticacion

// exportar arreglo
export default [
  {
    path: '/title',
    name: 'title_search',
    component: () => import(/* webpackChunkName: "title" */ '@/components/title/Search.vue'),
  },
];
