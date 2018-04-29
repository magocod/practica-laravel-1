<template>
  <v-layout row>
    <v-flex xs12 sm8 offset-sm2>

<br>
<br>

<v-card>

  <div>

      <v-breadcrumbs>

        <v-icon slot="divider">forward</v-icon>

        <v-breadcrumbs-item
        v-for="item in breadcumb"
        :key="item.text"
        :disabled="item.disabled"
        >
          {{ item.text }}
        </v-breadcrumbs-item>

      </v-breadcrumbs>

  </div>
           
</v-card>

<br>  

<v-toolbar color="black" dark tabs>

  <v-text-field
        prepend-icon="search"
        append-icon="mic"
        label="Busqueda"
        solo-inverted
        class="mx-3"
        flat
        name="q"
  ></v-text-field>

</v-toolbar>

<br>

<div v-for="item in themes" :key="item.nombre" @click="">
  
<v-card>

        <v-list two-line subheader class="indigo darken-4">
          <v-list-tile avatar >
            <v-list-tile-avatar>
              <v-icon large color="white">folder</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ item.nombre }}</v-list-tile-title>
            
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
      <div slot="header">Descripcion</div>
      <v-card class="blue-grey lighten-3">
        <v-card-text>
          {{ item.descripcion }}
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>

</v-card>

<br>

</div>

<template>
  <div class="text-xs-center">
    <v-pagination :length="6" v-model="page"></v-pagination>
  </div>
</template>

<br>

  
    </v-flex>
  </v-layout>


</template>

<script>

// mapear estado del store
import { mapState } from 'vuex';

export default {
    data () {
      return {
        // paginacion
        page: 1,

        breadcumb: [
          {
            text: 'Busqueda',
            disabled: false
          },
          {
            text: 'Categoria',
            disabled: false
          }

        ]
        


    
      }
    },

    // valor inicial del componente
    computed: {
         myLocalComputed() {
             // estado del componente
         },
         //mapeo del almacen 
         ...mapState('theme', ['themes'])
    }


}

</script>
