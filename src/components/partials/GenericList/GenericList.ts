import Vue from 'vue';

export default Vue.extend({

  name: 'GenericList',

  // variables recibida desde fuera
  props: [
    'list',
    'iconname',
  ],

  // almacenar las propiedades
  data() {
    return {
      search: '',
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4,
      },
      items: [
        { title: 'METADATA 1' },
        { title: 'METADATA 2' },
        { title: 'METADATA 3' },
      ],
    };
  },

  methods: {

    opt() {
      console.log('null');
    },

    resultevent(item: any) {
      // console.log(item);
      this.$emit('listelements:change', item);
    },

  },

});
