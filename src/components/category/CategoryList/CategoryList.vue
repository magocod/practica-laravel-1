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
			<listelements v-bind:list="categories" v-bind:iconname="'description'" @listelements:change="eventlist"></listelements>
		</v-flex>
	</v-layout>
</template>
<script src="./CategoryList.ts" lang="ts"></script>
<style src="./CategoryList.css"></style>
