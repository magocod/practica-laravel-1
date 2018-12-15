// no requieren autenticacion

// exportar arreglo
export default [
  {
    path: '/api',
    name: 'api_info',
    component: () => import(/* webpackChunkName: "api" */ '@/components/data/Summary.vue'),
  },
  {
    path: '/unefa',
    name: 'footer_unefa',
    component: () => import(/* webpackChunkName: "footer" */ '@/components/footer/Unefa.vue'),
  },
];
