// no requieren autenticacion

// exportar arreglo
export default [
  {
    path: '/recents',
    name: 'recents',
    component: () => import(/* webpackChunkName: "recent" */ '@/components/recent/List.vue'),
  },
];
