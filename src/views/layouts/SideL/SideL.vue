<template>

	<v-list>
	  <!-- listar arreglo principal-->
	  <!--:prepend-icon="item.action"-->
	  <v-list-group
	    v-model="item.active"
	    v-for="item in list"
	    :key="item.title"
	    no-action
	  >
	    <v-list-tile slot="activator">
	              
	      <v-list-tile-action>
	        <v-icon class="white--text">{{item.action}}</v-icon>
	      </v-list-tile-action>

	      <v-list-tile-content>
	        <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
	      </v-list-tile-content>

	    </v-list-tile>
	            
	    <!-- listar arreglo interno-->
	    <v-list-tile class="white" v-for="subItem in item.items" :key="subItem.title" :to="{name: subItem.href}">
	      <v-list-tile-content>
	        <v-list-tile-title>
	          <v-icon class="left">{{subItem.icon}}</v-icon>
	          &nbsp;&nbsp;&nbsp;&nbsp;
	          {{ subItem.title }}
	        </v-list-tile-title>
	      </v-list-tile-content>
	      <v-list-tile-action>
	        <v-icon>{{ subItem.action }}</v-icon>
	      </v-list-tile-action>
	    </v-list-tile>

	  </v-list-group>

	</v-list>

</template>
<script src="./SideL.ts" lang="ts"></script>
<style src="./SideL.css"></style>
