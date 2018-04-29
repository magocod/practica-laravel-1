import Vue from 'vue'
import Router from 'vue-router'

//componentes aplicacion
import Inicial from '@/components/Inicial'
//information
import Unefa from '@/components/information/Unefa'
//search
import Title from '@/components/search/Title'
import Category from '@/components/search/Category'
import Theme from '@/components/search/Theme'
import Author from '@/components/search/Author'
import Recent from '@/components/search/Recent'
//API
import Data from '@/components/api/Data'

Vue.use(Router)

export default new Router({
  mode:'history',
  //directorio
  base:__dirname,
  //arreglo con ruta -> componente
  routes: [
    {
      path: '/',
      name: 'inicial',
      component: Inicial
    },
    //information
    {
      path: '/unefa',
      name: 'info_unefa',
      component: Unefa
    },
    //search
    {
      path: '/busqueda/titulo',
      name: 'search_titulo',
      component: Title
    },
    {
      path: '/busqueda/categoria',
      name: 'search_category',
      component: Category
    },
    {
      path: '/busqueda/tematica',
      name: 'search_theme',
      component: Theme
    },
    {
      path: '/busqueda/autor',
      name: 'search_author',
      component: Author
    },
    {
      path: '/busqueda/publicaciones',
      name: 'search_recent',
      component: Recent
    },
    //API
    {
      path: '/api/data',
      name: 'api_data',
      component: Data
    }

  ]
})
