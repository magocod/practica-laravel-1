import Vue from 'vue';

// mapear estado del store
import { mapState } from 'vuex';

export default Vue.extend({

  // almacenar las propiedades
  data() {
    return {
      // estado de expansion de la carta
      show: false,

      breadcumb: [
        { text: 'INFORMATION', disabled: false },
        { text: 'UNEFA', disabled: false },
      ],

    };
  },

  // propiedades calculadas desde el componente
  computed: {

    ...mapState('manager', ['unefa']),

  },

});
