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

<v-card class="indigo darken-4">

  <div>

    <br>

    <h2 class="white--text">&nbsp;&nbsp;&nbsp;
      API consumida por esta aplicación
    </h2>

    <br>

  <center>
    <v-btn
      class="black white--text"
      :loading="loading"
      @click.native="loader = 'loading'"
      :disabled="loading"
      v-on:click="toggleMostrar"
    >
    <v-icon>settings</v-icon>
      Enlaces
    </v-btn>
  </center>

    <br>
    <br>


  </div>
           
</v-card>

<br>
<br>

<v-card class="blue-grey">

 <div v-if="mostrar">
  
  <v-card>

  <v-card-media src="https://www.metatrader4.com/c/2/0/metatrader_4_api_ru_en.jpg" height="200px">
  </v-card-media>

        <v-list two-line subheader>
          <v-list-tile avatar v-for="item in items" :key="item.title" @click="">
            <v-list-tile-avatar>
              <v-icon large color="blue darken-2">cached</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>
                <a v-bind:href="item.href">{{item.href}}</a>
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        
        </v-list>
      </v-card>
    
 </div>

</v-card>

<br>



</v-flex>
</v-layout>

</div>
</template>

<script>
  export default {
    data () {
      return {

        breadcumb: [
          {
            text: 'API',
            disabled: false
          },
          {
            text: 'Repositorio',
            disabled: false
          }
  
        ],
        //botones
        loader: null,
        loading: false,

        //links
        mostrar: false,

        items: [
          { title: 'Categorias',
            href:'http://magocod.pythonanywhere.com/api/storage/data_categoria',
          },
          { title: 'Colecciones',
            href:'http://magocod.pythonanywhere.com/api/storage/data_coleccion',
          },
          { title: 'Recursos digitales',
            href:'http://magocod.pythonanywhere.com/api/storage/data_item',
          },
          { title: 'Temas',
            href:'http://magocod.pythonanywhere.com/api/storage/data_tema',
          },
          { title: 'Tipos de items',
            href:'http://magocod.pythonanywhere.com/api/storage/data_item_type',
          }
        ]
      }

    },
    //metodos -> eventos
    methods: {
      toggleMostrar: function () {
        this.mostrar = !this.mostrar
      }
    },
    
 
    //animacion botones
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>