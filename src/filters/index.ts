import { monthdate, stringdate, relativetime, numberdate, monthnumber } from '@/filters/dates';
import { textuppercase } from '@/filters/text';

// crear plugin vue

export default {

  install(Vue: any) {
    Vue.filter('monthdate', monthdate);
    Vue.filter('stringdate', stringdate);
    Vue.filter('relativetime', relativetime);
    Vue.filter('numberdate', numberdate);
    Vue.filter('monthnumber', monthnumber);
    Vue.filter('textuppercase', textuppercase);
  },

};
