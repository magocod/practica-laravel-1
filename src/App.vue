<template>

  <v-app>

    <!--nabvar-->
    <v-toolbar fixed app clipped-right class="indigo darken-4">
      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Repositorio UNEFA</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn class="white--text" flat>Link Uno</v-btn>
          <v-btn class="white--text" flat>Link Dos</v-btn>
          <v-btn class="white--text" flat>Link Tres</v-btn>
        </v-toolbar-items>
      <v-toolbar-side-icon class="white--text" @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>

    <!--sidebar izquierda-->
    <v-navigation-drawer temporary clipped left app>
      
    </v-navigation-drawer>

    <v-navigation-drawer class="indigo darken-4" fixed v-model="drawer" app>

    <br>
    <br>
    
    <v-layout column align-center>
        <img width="200" height="200" v-bind:src="imagen" alt="escudo_unefa" class="mb-5">
    </v-layout>
    

    <v-list>
      <!-- listar arreglo principal-->
      <!--:prepend-icon="item.action"-->
        <v-list-group
            v-model="item.active"
            v-for="item in items_e"
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


    </v-navigation-drawer>

    <!--sidebar derecha-->
    <v-navigation-drawer fixed v-model="drawerRight" right clipped app>

    <!-- listar arreglo-->
    <template v-for="(item, index) in items_r">

        <!--asignar link del router mediante el nombre-->
        <v-list-tile :href="item.href" :to="{name: item.href}">

            <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-list-tile-title>
                  {{item.title}}
                </v-list-tile-title>
            </v-list-tile-content>

        </v-list-tile>

    </template>

    </v-navigation-drawer>

  <!--enrutador de componentes-->
  <v-content>
    <router-view/>
  </v-content>

    <v-footer height="auto" class="black">

      

      <v-layout row wrap justify-center>
      
      <!-- listar arreglo-->
      <template v-for="(link, index) in links">

        <!--asignar link del router mediante el nombre-->
        <v-btn color="white" flat :href="link.href" :to="{name: link.href}">
          {{ link.title }}
        </v-btn>

      </template>

      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>UNEFA coordinacion educacion a distancia</strong>
      </v-flex>

      </v-layout>

  </v-footer>



  </v-app>

</template>

<script>
export default {
  data () {
    return {
      //sidebar estado
      drawer: true,
      drawerRight: false,
      imagen:'static/icon/gif/unefalogo-min.gif',

      //items sidebar derecha
      items_r: [
      {
        href: 'inicial',
        router: true,
        title: 'Inicio',
        icon: 'home',
      }, 
      {
        href: 'inicial',
        router: true,
        title: 'Busqueda Avanzada',
        icon: 'search',
      }, 
      {
        href: 'inicial',
        router: true,
        title: 'otro',
        icon: 'domain',
      }],
     
      //footer
      links: [
      {
          href: 'inicial',
          router: true,
          title: 'Inicio',
          icon: 'home',
      },
      {
          href: 'inicial',
          router: true,
          title: 'Acerca de',
          icon: 'home',
      },
      {
          href: 'info_unefa',
          router: true,
          title: 'UNEFA',
          icon: 'home',
      },
      {
          href: 'inicial',
          router: true,
          title: 'UNEFA-VIRTUAL',
          icon: 'home',
      },
      {
          href: 'inicial',
          router: true,
          title: 'Contactenos',
          icon: 'home',
      }
      ],

      //lista de items extensible izquierda
      items_e: [

          {
            action: 'more',
            title: 'Informacion',
            items: [
              { 
                href: 'inicial',
                router: true,
                title: 'Repositorio',
                icon:'dns' 
              },
              { 
                href: 'inicial',
                router: true,
                title: 'Proximamente',
                icon:'grade' 
              }     
            ]
          },
          {
            action: 'work',
            title: 'Colecciones',
            items: [
              { 
                href: 'search_titulo',
                router: true,
                title: 'Titulo',
                icon:'keyboard_hide' 
              },
              { 
                href: 'search_category',
                router: true,
                title: 'Categoria',
                icon:'description' 
              },
              { 
                href: 'search_theme',
                router: true,
                title: 'Tematica',
                icon:'content_paste'
              },
              { 
                href: 'search_author',
                router: true,
                title: 'Autor',
                icon:'account_box'
              },
              { 
                href: 'search_recent',
                router: true,
                title: 'Recientes',
                icon:'next_week'
              },
              { 
                href: 'inicial',
                router: true,
                title: 'Proximamente',
                icon:'extension'
              }
            ]
          },
          {
            action: 'memory',
            title: 'Api',
            items: [
              { 
                href: 'api_data',
                router: true,
                title: 'Data',
                icon:'account_balance_wallet' 
              }   
            ]
          }
          
        ],

      
      title: 'Plantilla principal Vuetify.js'
    }
  },
  name: 'App'
}
</script>
