//importar constantes mutaciones

//estado del almacen

const state = {
    themes: [
          {
            nombre: 'tema_1',
            descripcion: 'descripcion'
          },
          {
            nombre: 'tema_2',
            descripcion: 'descripcion'
          },
          {
            nombre: 'tema_3',
            descripcion: 'descripcion'
          }
    ]

}

//mutaciones

//exportar propiedades
export default {
  namespaced: true,
  state
}

