// mapear estado del store
import { mapState } from 'vuex';

// TS
import Vue from 'vue';

export default Vue.extend({

  name: 'ResourceList',

  // almacenar las propiedades
  data() {
    return {
      search: '',
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4,
      },
      breadcumb: [
        { text: 'SEARCH', disabled: false },
        { text: 'RESOURCE', disabled: false },
      ],
    };
  },

  methods: {
    redirect() {
      this.$router.push({ name: 'home'});
    },
  },

  // propiedades calculadas desde el componente
  computed: {

    empty() {
      if (this.$store.getters['resource/QUANTITY_RECORDS'] === 0) {
        return false;
      } else {
        return true;
      }
    },

    ...mapState('resource', ['resources']),

  },

});
