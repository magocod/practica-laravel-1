<template>

<v-layout row>
	<v-flex xs12 sm8 offset-sm2>
	<br><br>

	<v-card>
    <v-breadcrumbs :items="breadcumb">
      <v-icon slot="divider">forward</v-icon>
    </v-breadcrumbs>     
	</v-card>

	<br><br>

	<v-card>

  	<v-img v-bind:src="unefa.imagen" height="200px">
  	</v-img>

    <v-card-title class="primary" primary-title>

      <div>
        <div class="white--text headline">{{ unefa.title }}</div>
      </div>

    </v-card-title>

    <v-card-actions class="blue-grey darken-1">
      <v-btn flat>option</v-btn>
      <v-btn flat color="purple">option</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click.native="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show">
        {{ unefa.description }}
      	<br><br>
      	WEBSITE: {{ unefa.url }}
      </v-card-text>
    </v-slide-y-transition>

	</v-card>

  <br><br>

	</v-flex>
</v-layout>

</template>

<script lang="ts">

// TS
import Vue from 'vue';

// mapear estado del store
import { mapState } from 'vuex';

export default Vue.extend({

  // almacenar las propiedades
  data() {
    return {
      // estado de expansion de la carta
      show: false,

      breadcumb: [
        { text: 'INFORMATION', disabled: false },
        { text: 'UNEFA', disabled: false },
      ],

    };
  },

  // propiedades calculadas desde el componente
  computed: {

    ...mapState('manager', ['unefa']),

  },

});

</script>