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

  <v-data-table
    :headers="headers"
    :items="items"
    :loading="true"
    class="elevation-1"
  >
    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
    </template>
  </v-data-table>

</v-flex>

</v-layout>

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
            text: 'Autor',
            disabled: false
          }

        ],

        headers: [
          {
            text: 'Autores',
            value: 'name'
          }
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            
          },
          {

            name: 'Ice cream sandwich',
            
          },
          {
      
            name: 'Eclair',
           
          },
          {
      
            name: 'Cupcake',
           
          },
          {
        
            name: 'Gingerbread',
           
          },
          {
         
            name: 'Jelly bean',
            
          },
          {
       
            name: 'Lollipop',
           
          },
          {
      
            name: 'Honeycomb',
            
          },
          {
        
            name: 'Donut',
           
          },
          {
           
            name: 'KitKat',
           
          }
        ]
        

    
      }
    }
  }
</script>