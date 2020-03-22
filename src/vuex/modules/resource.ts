/**
 *
 */

import { JSONtestserver, dbclient, firebaseexport } from '../../services';
import { ResourceF } from '../interfaces';

import {
  ADD_ARRAY,
} from '../mutation-types';

const state = {

  resources: [] as ResourceF[],

};

const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: any) => {
    return state.resources.length;
  },

};

const mutations = {

  [ADD_ARRAY]: (state: any, payload: ResourceF[]) => {
    state.resources = payload;
  },

};

const actions = {

  BY_COLLECTION({ state, commit }: any, collection: string) {
    // promesa
    return new Promise((resolve, reject) => {
      // usando intancia api
      dbclient.collection('resources').where(`collections.${collection}`, '==', true).get().then((snapshot) => {
        // revisar metadatos => que no provenga del cache
        if (snapshot.metadata.fromCache === true) {
          reject('opteniendo del cache SDK, sin conexion a internet');
        } else {
          const array: ResourceF[] = [];
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

  SEARCH_BY_TITLE({ state, commit }: any, title: string) {
    // promesa
    return new Promise((resolve, reject) => {
      // usando intancia api
      JSONtestserver.get(`http://localhost:3000/items?title_like=${title}`).then((response) => {
        resolve('exito en la consulta');
        // ejecutar mutaciones
        // console.log(response.data);
        commit('ADD_ARRAY', response.data);
      }).catch((error: any) => {
        reject(error);
      });
    });
  }, // SEARCH BY TITLE

};

export const resource = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
