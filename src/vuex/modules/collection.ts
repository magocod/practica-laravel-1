/**
 *
 */

import { JSONtestserver, dbclient, firebaseexport } from '../../services';
import { CollectionF } from '../interfaces';

import {
  ADD_ARRAY,
} from '../mutation-types';

const state = {

  collections: [] as CollectionF[],

};

const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: any) => {
    return state.collections.length;
  },

};

const mutations = {

  [ADD_ARRAY]: (state: any, payload: CollectionF[]) => {
    state.collections = payload;
  },

};

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
          const array: CollectionF[] = [];
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
          const array: CollectionF[] = [];
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
      JSONtestserver.get(`http://localhost:3000/collections?theme=${id}`)
      .then((response) => {
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

export const collection = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
