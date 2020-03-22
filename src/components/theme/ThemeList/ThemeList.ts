import Vue from 'vue';

// mapear estado del store
import { mapState } from 'vuex';
import { CollectionF } from '@/vuex/interfaces/firestore';

import { GenericList } from '../../partials';

export default Vue.extend({

  name: 'ThemeList',

  // reutilizar componentes
  components: {
    'generic-list': GenericList,
  },

  // almacenar las propiedades
  data() {
    return {
      breadcumb: [
        { text: 'SEARCH', disabled: false },
        { text: 'THEME', disabled: false },
      ],
    };
  },

  methods: {

    eventlist(item: CollectionF) {
      console.log(item);
      this.$store.dispatch('collection/BY_THEME', item.title).then((response) => {
        console.log(response);
        this.$snotify.success('Operation Description', 'COMPLETED', {
          timeout: 2000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }).catch((error: any) => {
        console.log(error);
        this.$snotify.error('Operation Description', 'FAILURE', {
          timeout: 2000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
      this.$router.push({name: 'collection_list', params: { key: item.title }});
    },

    load() {
      this.$store.dispatch('theme/LOAD_ALL').then((response) => {
        console.log(response);
        this.$snotify.success('Operation Description', 'COMPLETED', {
          timeout: 2000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }).catch((error: any) => {
        console.log(error);
        this.$snotify.error('Operation Description', 'FAILURE', {
          timeout: 2000,
          showProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
    },

  },

  // propiedades calculadas desde el componente
  computed: {

    ...mapState('theme', ['themes']),

  },

});
