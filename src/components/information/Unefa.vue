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
<br>

<v-card>

  <v-card-media src="http://800noticias.com/cms/wp-content/uploads/2015/06/unefa.jpg" height="200px">
  </v-card-media>

    <v-card-title class="indigo darken-4 " primary-title>

      <div>
        <div class="white--text headline">Universidad Nacional Experimental Politécnica de la Fuerza Armada Bolivariana</div>
      </div>

    </v-card-title>

        <v-card-actions class="blue-grey darken-1">

          <v-btn flat>Opcion</v-btn>
          <v-btn flat color="purple">Opcion</v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>

        </v-card-actions>

        <v-slide-y-transition>

          <v-card-text v-show="show">

            Es una institución universitaria de la Fuerza Armada Nacional Bolivariana (FANB) de la República Bolivariana de Venezuela que forma profesionales civiles y militares universitarios a nivel superior; bajo una visión humanista, orientada a la defensa integral de la nación, en los ámbitos ambientales, culturales, económicos, geográficos, políticos, sociales y militares; fundamentada en el desarrollo humano integral y sostenible y bajo el principio de la corresponsabilidad pueblo-estado
            <br>
            <br>
            Portal:
            <a href="http://www.unefa.edu.ve">www.unefa.edu.ve</a>

          </v-card-text>

        </v-slide-y-transition>

</v-card>

  <br>
  <br>

</v-flex>
</v-layout>

</template>


<script>
  export default {
    data: () => ({
      show: false,
      breadcumb: [
          {
            text: 'Información',
            disabled: false
          },
          {
            text: 'UNEFA',
            disabled: false
          }

        ]
    })
  }
</script>