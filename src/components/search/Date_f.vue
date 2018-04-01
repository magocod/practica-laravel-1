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
<v-progress-linear :indeterminate="true"></v-progress-linear>


<v-card>

<div>
  <v-layout row wrap>
    <v-flex xs11 sm5>
      <v-menu
        ref="menu"
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        min-width="290px"
        :return-value.sync="date"
      >
        <v-text-field
          slot="activator"
          label="Fecha de Desarrollo"
          v-model="date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>

    <v-btn color="white--text black">
      <v-icon color="white">flash_on</v-icon>
      Buscar
    </v-btn>

    <v-spacer></v-spacer>
  </v-layout>
</div>

</v-card>
<v-progress-linear :indeterminate="true"></v-progress-linear>

<br>
<br>

<v-progress-linear :indeterminate="true"></v-progress-linear>
<v-card>

<div>
  <v-layout row wrap>
    <v-flex xs11 sm5>
      <v-dialog
        ref="dialog"
        persistent
        v-model="modal"
        lazy
        full-width
        width="290px"
        :return-value.sync="date"
      >
        <v-text-field
          slot="activator"
          label="Fecha de Publicación"
          v-model="date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>

    <v-btn color="white--text black">
      <v-icon color="white">flash_on</v-icon>
      Buscar
    </v-btn>

    <v-spacer></v-spacer>

     

  </v-layout>
</div>

           
</v-card>
<v-progress-linear :indeterminate="true"></v-progress-linear>



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
            text: 'Fecha',
            disabled: false
          }

        ],
        //fechas
        date: null,
        menu: false,
        modal: false

      }

    }
  }
</script>