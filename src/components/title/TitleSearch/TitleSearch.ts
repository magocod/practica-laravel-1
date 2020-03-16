import Vue from 'vue';

export default Vue.extend({

  name: 'TitleSearch',

  // almacenar las propiedades
  data() {
    return {

      parameter: null,

      breadcumb: [
        { text: 'SEARCH', disabled: false },
        { text: 'TITLE', disabled: false },
      ],

      letters: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      ],

    };
  },

  methods: {

    text_search(parameter: string) {
      console.log(parameter);
      this.$store.dispatch('resource/SEARCH_BY_TITLE', parameter).then((response) => {
        console.log(response);
        this.$router.push({name: 'resource_list', params: { key: parameter }});
      }).catch((error: any) => {
        console.log(error);
      });
    },

  },

});
