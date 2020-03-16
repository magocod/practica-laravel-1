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
<script src="./Home.ts" lang="ts"></script>
<style src="./Home.css"></style>
