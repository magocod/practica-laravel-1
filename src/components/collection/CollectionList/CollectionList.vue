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
<script src="./CollectionList.ts" lang="ts"></script>
<style src="./CollectionList.css"></style>