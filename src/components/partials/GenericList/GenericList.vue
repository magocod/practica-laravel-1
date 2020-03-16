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
<script src="./GenericList.ts" lang="ts"></script>
<style src="./GenericList.css"></style>