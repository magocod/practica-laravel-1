<template>

  <v-app>
    <!-- componentes notificaciones -->
    <vue-snotify></vue-snotify>
    <!--nabvar-->
    <v-toolbar fixed app clipped-right class="primary">
      <v-toolbar-side-icon class="white--text" @click.stop="drawerLeft = !drawerLeft"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">REPOSITORY UNEFA</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn class="white--text" flat>Link</v-btn>
          <v-btn class="white--text" flat>Link</v-btn>
          <v-btn class="white--text" flat>Link</v-btn>
        </v-toolbar-items>
      <v-toolbar-side-icon class="white--text" @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer class="primary" fixed v-model="drawerLeft" app>
      <br><br>
      <v-layout column align-center>
        <v-img width="200" height="200" src="https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/icons%2Funefalogo-min.gif?alt=media&token=fbb35f23-c2d3-42dc-a3c4-e57cc4c2336d" alt="escudo_unefa"></v-img>
      </v-layout>
      <sidebar-left v-bind:list="itemsleft"></sidebar-left>
    </v-navigation-drawer>

    <!--sidebar derecha-->
    <v-navigation-drawer fixed v-model="drawerRight" right clipped app>
      <!-- componente -->
      <sidebar-rigth v-bind:list="itemsright"></sidebar-rigth>
    </v-navigation-drawer>

    <!--enrutador de componentes-->
    <v-content>
      <router-view/>
    </v-content>

    <footer-app v-bind:list="itemsfooter"></footer-app>
  </v-app>

</template>

<script lang="ts">

// TS
import Vue from 'vue';

// mapear estado del store
import { mapState } from 'vuex';

import {
  FooterApp,
  SideL,
  SideR,
} from '@/views';

export default Vue.extend({

  name: 'App',

  // reutilizar componentes
  components: {
    'footer-app': FooterApp,
    'sidebar-left': SideL,
    'sidebar-rigth': SideR,
  },

  // almacenar las propiedades
  data() {
    return {

      drawerLeft: true,
      drawerRight: false,

    };
  },

  // propiedades calculadas desde el componente
  computed: {

    ...mapState('manager', ['itemsleft']),
    ...mapState('manager', ['itemsright']),
    ...mapState('manager', ['itemsfooter']),

  },

});

</script>
