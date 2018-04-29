//importar constantes mutaciones
import {
  INCREMENT_COUNT
} from '../mutation-types'


//estado del almacen
const state = {
    //contador test
    count:0,

}

//modificar el estado del almacen
const mutations = {
    
        //incrementar contador test
        [INCREMENT_COUNT]: function (state) {
            state.count++
        }

}

//exportar propiedades
export default {
  namespaced: true,
  state,
  mutations
}