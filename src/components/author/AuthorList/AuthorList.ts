import Vue from 'vue';

import { Author } from '@/vuex';

// mapear estado del store
import { mapState } from 'vuex';

export default Vue.extend({

  name: 'AuthorList',

  // almacenar las propiedades
  data() {
    return {
      breadcumb: [
        { text: 'SEARCH', disabled: false },
        { text: 'AUTHOR', disabled: false },
      ],
      search: '',
      headers: [
        { text: 'NAME', value: 'name' },
        { text: 'SEARCH', value: 'name' },
      ],
    };
  },

  methods: {

    collections(item: Author) {
      console.log(item);
      // this.$router.push({name: 'collection_list', params: { key: item.name }});
    },

    load() {
      this.$store.dispatch('author/LOAD_ALL').then((response) => {
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

    ...mapState('author', ['authors']),

  },

});
