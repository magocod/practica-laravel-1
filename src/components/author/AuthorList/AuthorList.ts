import Vue from 'vue';

import { AuthorF } from '@/vuex';

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

    collections(item: AuthorF) {
      console.log(item);
      // this.$router.push({name: 'collection_list', params: { key: item.name }});
    },

    load() {
      // pass
    },

  },

  // propiedades calculadas desde el componente
  computed: {

    ...mapState('author', ['authors']),

  },

});
