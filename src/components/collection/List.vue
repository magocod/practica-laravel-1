<template>  

<v-layout row>
<v-flex xs12 sm8 offset-sm2>
  <br>
    <v-card>
      <v-breadcrumbs :items="breadcumb">
        <v-icon slot="divider">forward</v-icon>
      </v-breadcrumbs>
      <v-btn absolute fab bottom right color="red darken-4" v-on:click="redirect">
        <v-icon class="white--text">reply</v-icon>
      </v-btn>
    </v-card>
  <br><br>
  <listelements v-bind:list="collections" v-bind:iconname="'work'" @listelements:change="eventlist"></listelements>
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
        { text: 'COLLECTION', disabled: false },
      ],
    };
  },

  methods: {

    redirect() {
      this.$router.push({ name: 'home'});
    },

    eventlist(item: Collection) {
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

</script>