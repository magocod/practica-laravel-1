<template>

<v-layout row>
<v-flex xs12 sm8 offset-sm2>
  <br>
    <v-card>
      <v-breadcrumbs :items="breadcumb">
        <v-icon slot="divider">forward</v-icon>
      </v-breadcrumbs>
      <v-btn absolute fab bottom right color="red darken-4" v-on:click="load">
        <v-icon class="white--text">flash_on</v-icon>
      </v-btn>
    </v-card>
  <br><br>
	<listelements v-bind:list="themes" v-bind:iconname="'content_paste'" @listelements:change="eventlist"></listelements>
</v-flex>
</v-layout>

</template>

<script lang="ts">

// TS
import Vue from 'vue';

// mapear estado del store
import { mapState } from 'vuex';
import { Collection } from '@/vuex/interfaces/firestore';

import listelements from '@/components/layouts/listelements.vue';

export default Vue.extend({

  // reutilizar componentes
  components: {

    listelements,

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

    eventlist(item: Collection) {
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

</script>