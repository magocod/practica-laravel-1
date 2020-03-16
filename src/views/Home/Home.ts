// TS
import Vue from 'vue';

export default Vue.extend({

  name: 'Home',

  data() {
    return {
      // carrusel
      items: [
        {
          // tslint:disable-next-line
          src: 'https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/carrusel%2Fvuetify-c-min.jpg?alt=media&token=cf3f4bc0-3dab-4572-a3e8-2ca900e3f853',
          title: 'carrusel_1',
        },
        {
          // tslint:disable-next-line
          src: 'https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/carrusel%2Fvuejs-c-min.jpg?alt=media&token=8317fdbb-e4e6-4823-a9a6-2c11524b218a',
          title: 'carrusel_2',
        },
        {
          // tslint:disable-next-line
          src: 'https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/carrusel%2Fnodejs-c-min.jpg?alt=media&token=ca53fa13-4c30-4e45-a803-63f2ae7a2073',
          title: 'carrusel_3',
        },
        {
          // tslint:disable-next-line
          src: 'https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/carrusel%2Fjs-c-min.jpg?alt=media&token=1f702b4c-9ae7-41ab-9270-63c4c4e30d01',
          title: 'carrusel_4',
        },
      ],

      // sheet
      sheet: false,
      // sheet info
      tiles: [
        {
          // tslint:disable-next-line
          img: 'https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/icons%2Fvue-min.png?alt=media&token=a210a195-3e99-4175-88f8-36521709f979',
          title: 'Vue.JS',
        },
        {
          // tslint:disable-next-line
          img: 'https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/icons%2Fvuetify-min.png?alt=media&token=135794f7-e6bc-40bd-bb07-24abdd85aad3',
          title: 'Vuetify.JS',
        },
        {
          // tslint:disable-next-line
          img: 'https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/icons%2Ftypescript-min.png?alt=media&token=2be2aa1b-8bc7-4b33-b912-11d6766e5d81',
          title: 'Typescript',
        },
        {
          // tslint:disable-next-line
          img: 'https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/icons%2Fnode-min.png?alt=media&token=faa8a72b-213f-40fd-bb61-b8511552d2ab',
          title: 'Node.JS',
        },
      ],

      // modal
      dialog: false,

    };
  },

});
