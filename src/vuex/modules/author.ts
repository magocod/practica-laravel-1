/**
 *
 */

import { JSONtestserver, dbclient, firebaseexport } from '../../services';

import { AuthorF } from '../interfaces';

import {
  ADD_ARRAY,
} from '../mutation-types';

const state = {

  authors: [] as AuthorF[],

};

const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: any) => {
    return state.authors.length;
  },

};

const mutations = {

  [ADD_ARRAY]: (state: any, payload: AuthorF[]) => {
    state.authors = payload;
  },

};

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
          const array: AuthorF[] = [];
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
      JSONtestserver.get(`http://localhost:3000/authors`).then((response) => {
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

export const author = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
