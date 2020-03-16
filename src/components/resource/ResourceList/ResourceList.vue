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
  <v-container fluid grid-list-md>
  <v-data-iterator
    :search="search"
    :items="resources"
    :rows-per-page-items="rowsPerPageItems"
    :pagination.sync="pagination"
    content-tag="v-layout"
    row
    wrap
  >
    <v-flex
      slot="item"
      slot-scope="props"
      xs6
    >
      <v-card>
        <v-img v-if="props.item.urlimg === 'undefined'" src="https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/default%2Fjpg-default.png?alt=media&token=92e1ae7f-c1f5-4fcf-96f2-4bf3b78f6d21"></v-img>
        <v-img v-else :src="props.item.urlimg"></v-img>
        <v-card-title class="primary white--text"><h4>{{ props.item.title | textuppercase }}</h4></v-card-title>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-content>DESCRIPTION:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ props.item.description }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>THEME:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ props.item.theme }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>PUBLISHED:</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ props.item.timestamp | relativetime }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-data-iterator>
  </v-container>

</v-flex>
</v-layout>
</template>
<script src="./ResourceList.ts" lang="ts"></script>
<style src="./ResourceList.css"></style>