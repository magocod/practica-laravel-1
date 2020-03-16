<template>

<!-- listar arreglo-->
<section>
  <div v-for="(item, index) in list">
    <!--asignar link del router mediante el nombre-->
    <v-list-tile :href="item.href" :to="{name: item.href}">
      <v-list-tile-action>
        <v-icon>{{item.icon}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          {{item.title}}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</section>
  
</template>
<script src="./SideR.ts" lang="ts"></script>
<style src="./SideR.css"></style>