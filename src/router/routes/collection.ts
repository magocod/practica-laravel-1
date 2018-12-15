// no requieren autenticacion

// exportar arreglo
export default [
  {
    path: '/collections/:key',
    name: 'collection_list',
    component: () => import(/* webpackChunkName: "collection" */ '@/components/collection/List.vue'),
  },
  {
    path: '/collection/:id',
    name: 'collection_detail',
    component: () => import(/* webpackChunkName: "collection" */ '@/components/collection/Detail.vue'),
  },
];
