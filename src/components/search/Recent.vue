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


<v-card class="blue-grey darken-4">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs${card.flex}`]: true }"
              v-for="card in items"
              :key="card.title"
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"/>
                        <br>
                        <span class="headline white--text" v-text="card.date"/>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions class="blue-grey">
                  <v-spacer></v-spacer>
                  
                  <v-tooltip bottom>
                  <v-btn icon slot="activator">
                    <v-icon>content_paste</v-icon>
                  </v-btn>
                  <span>{{ card.theme }}</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                  <v-btn icon slot="activator">
                    <v-icon>card_membership</v-icon>
                  </v-btn>
                  <span>{{ card.type }}</span>
                  </v-tooltip>

                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
</v-card>

<br>
<br>

<v-card class="blue-grey darken-4">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs${card.flex}`]: true }"
              v-for="card in collections"
              :key="card.title"
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"/>
                        <br>
                        <span class="headline white--text" v-text="card.date"/>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions class="blue-grey">
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <v-btn icon slot="activator">
                      <v-icon>content_paste</v-icon>
                    </v-btn>
                    <span>{{ card.theme }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
</v-card>

<br>
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
            text: 'Busqueda',
            disabled: false
          },
          {
            text: 'Publicado Recientemente',
            disabled: false
          }

        ],

        items: [
        { title: 'VueJS',
          date: 'xx/xx/xxxx',
          theme:'tema',
          type:'tipo', 
          src: 'https://i.pinimg.com/originals/9d/fb/da/9dfbdaa5df3a6a9bc61fe84d058918bb.png', 
          flex: 6 
        },
        { title: 'NodeJS',
          date: 'xx/xx/xxxx',
          theme:'tema',
          type:'tipo',  
          src: 'http://incurs.us/sites/default/files/2016-08/nodejs-wallpaper-1_0.png', 
          flex: 6 
        },
        { title: 'Vuetifys',
          date: 'xx/xx/xxxx', 
          theme:'tema',
          type:'tipo', 
          src: 'https://wallpaperstudio10.com/static/wpdb/wallpapers/3840x2160/170468.jpg', 
          flex: 6 
        },
        { title: 'Javascript',
          date: 'xx/xx/xxxx',
          theme:'tema', 
          type:'tipo', 
          src: 'http://iwearshorts.com/wp-content/uploads/2015/05/javascript-site-1070x580.jpg', 
          flex: 6 
        }

        ],

        collections: [
        { title: 'Framework PHP',
          date: 'xx/xx/xxxx',
          theme:'tema',
          src: 'https://c.wallhere.com/photos/ca/a8/Laravel_simple_code_programming_PHP_dark-78631.png!d', 
          flex: 12 
        },
        { title: 'Sistema Operativo',
          date: 'xx/xx/xxxx',
          theme:'tema', 
          src: 'https://en.opensuse.org/images/a/a5/Opensuse1.jpg', 
          flex: 12 
        },
        { title: 'Servidor Web',
          date: 'xx/xx/xxxx', 
          theme:'tema',
          src: 'https://sdtimes.com/wp-content/uploads/2017/09/NGINX.png', 
          flex: 12 
        }
        ]

      }

    }
  }
</script>