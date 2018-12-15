// DOCUMENTOS API

/**
 * @param {number} identificador documento
 */

export interface Identifier {
  id: number;
}

/**
 * @param {string} nombre autor
 */

// documento modelo telefonico
export interface Author extends Identifier {
  name: string;
}

/**
 * @param {string} titulo del recurso
 * @param {string} descripcion breve del recurso
 */

// base elementos del elemento
export interface Item extends Identifier {
  title: string;
  description: string;
}

/**
 * @param {number} tematica del recurso
 * @param {array} categorias a la que pertenece
 */

export interface Collection extends Item {
  theme: number;
  categories: number[];
}

/**
 * @param {number} tematica del recurso
 * @param {array} colecciones a la que pertenece
 */

export interface Resource extends Item {
  theme: number;
  collections: number[];
}
