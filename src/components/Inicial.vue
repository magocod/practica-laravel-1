<template>
  <v-container fluid>

    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>

<br>
<br>



  <!--carrusel-->
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>

 
 <!--sheet-->
  <div class="text-xs-center">

    <v-bottom-sheet v-model="sheet">
      <v-btn slot="activator" color="indigo darken-4" dark>Tecnologias</v-btn>

      <v-list>

        <v-subheader>
          Usadas actualmente
        </v-subheader>

        <v-list-tile v-for="tile in tiles" :key="tile.title" @click="sheet = false">
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <img :src="tile.img" :alt="tile.title">
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile>

      </v-list>

    </v-bottom-sheet>

  <!--modal-->
  <v-dialog v-model="dialog" persistent max-width="290">

      <v-btn color="black" dark slot="activator">
      1.0 Github
      </v-btn>

      <v-card>
        <center>
        <v-card-title class="headline">Repositorio UNEFA VUE.JS</v-card-title>
        </center>
        <center>
            <a class="black--text" href="https://github.com/magocod/Vue_repositorio">Codigo Fuente</a> 
        </center>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Salir</v-btn>
        </v-card-actions>

      </v-card>
  </v-dialog>

  </div>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {

        //carrusel
        items: [
          {
            src: 'static/carrusel/vuejs-c.png'
          },
          {
            src: 'static/carrusel/vuetify-c.png'
          },
          {
            src: 'static/carrusel/nodejs-c.jpg'
          },
          {
            src: 'static/carrusel/js-c.jpg'
          }
        ],

      //sheet
        sheet: false,

        tiles: [

        { img: 'static/icon/vue.png', 
          title: 'Vue.JS' 
        },
        { img: 'static/icon/vuetify.jpg', 
          title: 'Vuetify.JS' 
        },
        { img: 'static/icon/vuebootstrap.png', 
          title: 'Vue + Bootstrap -> Proximamente' 
        },
        { img: 'static/icon/node.png', 
          title: 'Node.JS' 
        }
  
        ],

      //modal
      dialog: false
     
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
