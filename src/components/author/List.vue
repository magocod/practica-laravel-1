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
	<v-card>
    <v-card-title>
      FILTER
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="NAME"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="authors"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>
          <v-icon small class="mr-2" @click="collections(props.item)">
            edit
          </v-icon>
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</v-flex>
</v-layout>

</template>

<script lang="ts">

// TS
import Vue from 'vue';

import { Author } from '@/vuex/interfaces/firestore';

// mapear estado del store
import { mapState } from 'vuex';

export default Vue.extend({

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

</script>