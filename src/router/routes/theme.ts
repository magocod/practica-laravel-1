// no requieren autenticacion

// exportar arreglo
export default [
  {
    path: '/themes',
    name: 'theme_list',
    component: () => import(/* webpackChunkName: "theme" */ '@/components/theme/List.vue'),
  },
];
