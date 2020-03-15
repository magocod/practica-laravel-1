// importar base instancia axios
import {JSONtestserver} from '@/api/testserver';

import axios from 'axios';
import { dbclient, firebaseexport } from '@/api/firebase';

import { Author } from '@/vuex/interfaces/firestore';

// importar constantes mutaciones
import {
  ADD_ARRAY,
} from '../mutation-types';

// estado del almacen
const state = {

  authors: [] as Author[],

};

// peticion del elementos del almacen
const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: any) => {
    return state.authors.length;
  },

};

// modificar el estado del almacen
const mutations = {

  [ADD_ARRAY]: (state: any, payload: Author[]) => {
    state.authors = payload;
  },

};

// comunicar store con exterior
const actions = {

  LOAD_ALL({ state, commit }: any) {
    // promesa
    return new Promise((resolve, reject) => {
      // usando intancia api
      dbclient.collection('authors').get().then((snapshot) => {
        // revisar metadatos => que no provenga del cache
        if (snapshot.metadata.fromCache === true) {
          reject('opteniendo del cache SDK, sin conexion a internet');
        } else {
          const array: Author[] = [];
          snapshot.forEach((doc) => {
            const ob: any = firebaseexport(doc.data(), doc.id);
            array.push(ob);
          });
          // actualizar estado de la app
          commit('ADD_ARRAY', array);
          resolve('conexion exitosa');
        }
      }).catch((err) => {
        reject(err);
      });
    });
  }, // LOAD ALL

  ALL({ state, commit }: any) {
    // promesa
    return new Promise((resolve, reject) => {
      // usando intancia api
      axios.get(`http://localhost:3000/authors`).then((response) => {
        resolve('exito en la consulta');
        // ejecutar mutaciones
        // console.log(response.data);
        commit('ADD_ARRAY', response.data);
      }).catch((error: any) => {
        reject(error);
      });
    });
  }, // ALL

};

// exportar propiedades
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
