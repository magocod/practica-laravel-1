<template>

  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
  			<!--carrusel-->
  			<v-carousel>
    			<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i" v-bind:alt="item.title"></v-carousel-item>
  			</v-carousel>

 				<!-- b sheet-->
        <div class="text-xs-center">
          <v-bottom-sheet v-model="sheet">
      			<v-btn slot="activator" color="primary" dark>Technologies</v-btn>

      			<v-list>

        			<v-subheader>
        				Currently used
        			</v-subheader>

        			<v-list-tile v-for="tile in tiles" :key="tile.title" @click="sheet = false">
          			<v-list-tile-avatar>
            			<v-avatar size="32px" tile>
             	 			<v-img :src="tile.img" :alt="tile.title"></v-img>
            			</v-avatar>
          			</v-list-tile-avatar>
          			<v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        			</v-list-tile>

      			</v-list>
    			</v-bottom-sheet>

  				<!--modal-->
  				<v-dialog v-model="dialog" persistent max-width="290">

      			<v-btn color="black" dark slot="activator">0.3 Github</v-btn>

      			<v-card>
        			<v-card-title primary-title class="primary white--text">REPOSITORY</v-card-title>
              <v-container>
              <v-text-field
                label="SOURCE CODE"
                placeholder="https://github.com/magocod/Vue_repositorio"
                outline
                readonly
              > 
              </v-text-field>
              </v-container>

        			<v-card-actions>
          			<v-spacer></v-spacer>
          			<v-btn color="green darken-1" flat @click.native="dialog = false">close</v-btn>
        			</v-card-actions>
      			</v-card>
  				</v-dialog>

  			</div>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script lang="ts">

// TS
import Vue from 'vue';

export default Vue.extend({

  // almacenar las propiedades
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

</script>
