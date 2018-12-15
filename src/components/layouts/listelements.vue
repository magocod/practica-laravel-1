<template>

<div>

<v-card-title>
  FILTER
  <v-spacer></v-spacer>

  <v-text-field
    v-model="search"
    append-icon="search"
    label="TITLE"
    box
    hide-details
  ></v-text-field>

</v-card-title>

<v-data-iterator
  :search="search"
  :items="list"
  :rows-per-page-items="rowsPerPageItems"
  :pagination.sync="pagination"
>
  <v-flex slot="item" slot-scope="props">
    <v-card>

      <v-list two-line subheader class="primary">
        <v-list-tile avatar >
          <v-list-tile-avatar>
            <v-icon large color="white">{{ iconname }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ props.item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">info</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-expansion-panel> 
        <v-expansion-panel-content class="blue-grey white--text">
          <div slot="header"></div>
            <v-card class="blue-grey lighten-3">
              <v-card-text>
              {{ props.item.description }}
              <hr>
                <v-tooltip bottom>
                  <v-btn round color="primary" slot="activator" v-on:click="resultevent(props.item)">
                    <v-icon>work</v-icon>
                  </v-btn>
                  <span>list resources</span>
                </v-tooltip>
                <v-menu offset-y>
                  <v-btn round slot="activator" color="primary">
                    <v-icon>info</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile
                      v-for="(item, index) in items"
                      :key="index"
                      @click="opt"
                    >
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </v-card-text>
            </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-card>
    <br>
  </v-flex>
</v-data-iterator>

</div>

</template>

<script lang="ts">

// TS
import Vue from 'vue';

export default Vue.extend({

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

</script>