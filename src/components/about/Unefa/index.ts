import Unefa from './Unefa.vue';

const LazyUnefa = () => import(/* webpackChunkName: "about" */ './Unefa.vue');

export { Unefa, LazyUnefa };
export default Unefa;
