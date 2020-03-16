<template>
	<v-container fluid>
	  <br><br>
	  <v-slide-y-transition mode="out-in">
	    <v-layout column align-center>
	      <v-img width="300" height="300" src="https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/icons%2Fperro-min.jpg?alt=media&token=ceb0bf3c-f6ec-437a-9871-a9bb6910c6cd" alt="error404" class="mb-5"></v-img>
	      <v-alert :value="true" class="primary" type="info">
	        <blockquote>
	          &#8220;ERROR 404 &#8221;
	          <em>&mdash;This is not the page you're looking for</em>
	        </blockquote>
	      </v-alert>
	    </v-layout>
	  </v-slide-y-transition>
	</v-container>
</template>
<script src="./Error404.ts" lang="ts"></script>
<style src="./Error404.css"></style>
