import Vue from 'vue';

export default Vue.extend({

  name: 'Counter',

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
      // this.$store.commit('counter/INCREMENT');
    },
  },

});
