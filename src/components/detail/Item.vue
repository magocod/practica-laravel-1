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


<v-card class="blue-grey">

  <div>



  </div>
           
</v-card>



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
            text: 'Recurso Digital',
            disabled: false
          },
          {
            text: 'Detalles',
            disabled: false
          }

        ]

      }

    }
  }
</script>