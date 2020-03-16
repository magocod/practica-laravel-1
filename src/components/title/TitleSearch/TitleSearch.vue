<template>
	<v-layout row>
	  <v-flex xs12 sm8 offset-sm2>
	    <br>
	    <v-card>
	      <v-breadcrumbs :items="breadcumb">
	        <v-icon slot="divider">forward</v-icon>
	      </v-breadcrumbs>
	    </v-card>
	    <br>
	    <v-alert :value="true" type="info">
	      Not available
	    </v-alert>
	    <br>
	    <form v-on:submit.prevent="text_search(parameter)">
	    <v-toolbar color="black" dark tabs>
	      <v-text-field
	        disabled
	        prepend-icon="search"
	        append-icon="mic"
	        label="Busqueda"
	        solo-inverted
	        class="mx-3"
	        flat
	        v-model="parameter"
	      ></v-text-field>
	    </v-toolbar>
	    </form>
	    <br>

	    <v-card class="blue-grey">
	      <br>
	      <div class="text-xs-center">
	        <template v-for="(letter, index) in letters">
	          <v-btn disabled v-on:click="text_search(letter)" fab dark small color="primary">
	            {{ letter }}
	          </v-btn>
	        </template>
	      </div>
	      <br>         
	    </v-card>

	  </v-flex>
	</v-layout>
</template>
<script src="./TitleSearch.ts" lang="ts"></script>
<style src="./TitleSearch.css"></style>