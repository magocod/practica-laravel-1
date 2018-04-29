//estado del almacen
const state = {
    
    categories: [
          {
            nombre: 'categoria_1',
            descripcion: 'descripcion',
            correcto:true
          },
          {
            nombre: 'categoria_2',
            descripcion: 'descripcion',
            correcto:true
          },
          {
            nombre: 'categoria_3',
            descripcion: 'descripcion',
            correcto:false
          }

    ]

}

//peticion del elementos del almacen
const getters = {

        //categoria busqueda
        categories_search(state) {
            return state.categories.filter(categories => categories.correcto === true );
        }
}


//exportar propiedades
export default {
  namespaced: true,
  state,
  getters
}