import Vue from 'vue';

// mapear estado del store
import { mapState } from 'vuex';

import { CollectionF } from '@/vuex/interfaces/firestore';
import { GenericList } from '../../partials';

export default Vue.extend({

  name: 'CollectionList',

  // reutilizar componentes
  components: {
    'generic-list': GenericList,
  },

  // almacenar las propiedades
  data() {
    return {
      breadcumb: [
        { text: 'SEARCH', disabled: false },
        { text: 'COLLECTION', disabled: false },
      ],
    };
  },

  methods: {

    redirect() {
      this.$router.push({ name: 'home'});
    },

    eventlist(item: CollectionF) {
      // console.log(item);
      this.$store.dispatch('resource/BY_COLLECTION', item.title).then((response) => {
        console.log(response);
      }).catch((error: any) => {
        console.log(error);
      });
      this.$router.push({name: 'resource_list', params: { key: item.title }});
    },
  },

  // propiedades calculadas desde el componente
  computed: {

    empty() {
      if (this.$store.getters['collection/QUANTITY_RECORDS'] === 0) {
        return false;
      } else {
        return true;
      }
    },

    ...mapState('collection', ['collections']),

  },

});
