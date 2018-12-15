// importar base instancia axios
import {JSONtestserver} from '@/api/testserver';

import axios from 'axios';

import { dbclient, firebaseexport } from '@/api/firebase';
import { Collection } from '@/vuex/interfaces/firestore';

// importar constantes mutaciones
import {
  ADD_ARRAY,
} from '../mutation-types';

// estado del almacen
const state = {

  collections: [] as Collection[],

};

// peticion del elementos del almacen
const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: any) => {
    return state.collections.length;
  },

};

// modificar el estado del almacen
const mutations = {

  [ADD_ARRAY]: (state: any, payload: Collection[]) => {
    state.collections = payload;
  },

};

// comunicar store con exterior
const actions = {

  BY_CATEGORY({ state, commit }: any, category: string) {
    // promesa
    return new Promise((resolve, reject) => {
      // usando intancia api
      dbclient.collection('collections').where(`categories.${category}`, '==', true).get().then((snapshot) => {
        // revisar metadatos => que no provenga del cache
        if (snapshot.metadata.fromCache === true) {
          reject('opteniendo del cache SDK, sin conexion a internet');
        } else {
          const array: Collection[] = [];
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
  },

  BY_THEME({ state, commit }: any, theme: string) {
    // promesa
    return new Promise((resolve, reject) => {
      // usando intancia api
      dbclient.collection('collections').where('theme', '==', theme).get().then((snapshot) => {
        // revisar metadatos => que no provenga del cache
        if (snapshot.metadata.fromCache === true) {
          reject('opteniendo del cache SDK, sin conexion a internet');
        } else {
          const array: Collection[] = [];
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
  },

  SEARCH_BY_THEME({ state, commit }: any, id: number) {
    // promesa
    return new Promise((resolve, reject) => {
      // usando intancia api
      axios.get(`http://localhost:3000/collections?theme=${id}`).then((response) => {
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
