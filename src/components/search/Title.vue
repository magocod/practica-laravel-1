<template>

<div>

<br>
<br>

<v-layout row>

<v-flex xs12 sm8 offset-sm2>


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
<br>
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
<br>

<v-card class="blue-grey">

  <div>

  <br>

  <h2>&nbsp;&nbsp;&nbsp;Letras</h2>

  <div class="text-xs-center">

    <template v-for="(element, index) in letters">
      <v-btn fab dark small color="primary">
        {{ element.letter }}
      </v-btn>
    </template>

  </div>
  <br>

  </div>
           
</v-card>

<br>

<v-card class="blue-grey">

  <div>

  <br>

  <h2>Contador</h2>

  <div class="text-xs-center">
      <v-btn v-on:click="incrementar" fab dark color="primary">
        contador
      </v-btn>
      <v-btn fab dark color="primary">
        {{ count }}
      </v-btn>
  </div>
  <br>

  </div>
           
</v-card>

<br>
<br>



</v-flex>
</v-layout>

</div>
</template>

<script>

import { mapState } from 'vuex';

//mapear mutaciones
//import { mapMutations } from 'vuex';

  export default {
    data () {
      return {

        breadcumb: [
          {
            text: 'Busqueda',
            disabled: false
          },
          {
            text: 'Titulo',
            disabled: false
          }

        ],


        letters:[
          {
            letter: 'A',
          },
          {
            letter: 'B',
          },
          {
            letter: 'C',
          },
          {
            letter: 'D',
          },
          {
            letter: 'E',
          },
          {
            letter: 'F',
          },
          {
            letter: 'G',
          },
          {
            letter: 'H',
          },
          {
            letter: 'I',
          },
          {
            letter: 'J',
          },
          {
            letter: 'K',
          },
          {
            letter: 'L',
          },
          {
            letter: 'M',
          },
          {
            letter: 'N',
          },
          {
            letter: 'O',
          },
          {
            letter: 'P',
          },
          {
            letter: 'Q',
          },
          {
            letter: 'R',
          },
          {
            letter: 'S',
          },
          {
            letter: 'T',
          },
          {
            letter: 'U',
          },
          {
            letter: 'V',
          },
          {
            letter: 'W',
          },
          {
            letter: 'X',
          },
          {
            letter: 'Y',
          },
          {
            letter: 'Z',
          }

        ]

      }


    },

    methods: {
        //incrementar contador
        incrementar(){
              this.$store.commit('test/INCREMENT_COUNT');
         }
         
    },

    // valor inicial del componente
    computed: {
         myLocalComputed() {
             // estado del componente
         }, 
         //mapeo del almacen
         ...mapState('test',['count'])
    }

    
  }
</script>