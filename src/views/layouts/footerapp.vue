<template>
<v-footer height="auto" class="black">

  <v-layout row wrap justify-center>
      
  <!-- listar arreglo-->
  <template v-for="(link, index) in list">

    <!--asignar link del router mediante el nombre-->
    <v-btn color="white" flat :href="link.href" :to="{name: link.href}">
      {{ link.title }}
    </v-btn>

  </template>

  <v-flex xs12 py-3 text-xs-center white--text>
    &copy;2018 — <strong>UNEFA distance education coordination</strong>
  </v-flex>

  </v-layout>

</v-footer>
</template>

<script lang="ts">

// TS
import Vue from 'vue';

export default Vue.extend({

  // variables recibida desde fuera
  props: [
    'list',
  ],

  // almacenar las propiedades
  data() {
    return {

    };
  },

});

</script>