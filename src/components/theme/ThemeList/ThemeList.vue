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
			<generic-list
				v-bind:list="themes"
				v-bind:iconname="'content_paste'"
				@listelements:change="eventlist">
			</generic-list>
		</v-flex>
	</v-layout>
</template>
<script src="./ThemeList.ts" lang="ts"></script>
<style src="./ThemeList.css"></style>