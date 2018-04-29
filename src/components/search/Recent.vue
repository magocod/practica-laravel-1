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
          src: 'https://cdn-images-1.medium.com/max/1920/1*nfvapd86apvGH-hNBYkYuw.png', 
          flex: 6 
        },
        { title: 'NodeJS',
          date: 'xx/xx/xxxx',
          theme:'tema',
          type:'tipo',  
          src: 'https://cdn-images-1.medium.com/max/1920/1*o5lVFLMq1WrXbr7myV5XeQ.png', 
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
          src: 'https://img00.deviantart.net/0641/i/2017/127/b/7/javascript_wallpaper_by_mrhudson-db8gw2e.png', 
          flex: 6 
        }

        ],

        collections: [
        { title: 'Servidor Web',
          date: 'xx/xx/xxxx',
          theme:'tema',
          src: 'https://sdtimes.com/wp-content/uploads/2017/09/NGINX.png', 
          flex: 12 
        },
        { title: 'Servidor Web',
          date: 'xx/xx/xxxx',
          theme:'tema', 
          src: 'https://sdtimes.com/wp-content/uploads/2017/09/NGINX.png', 
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