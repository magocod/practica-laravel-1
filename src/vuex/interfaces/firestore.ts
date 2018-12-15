// DOCUMENTOS API

/**
 * @param {string} identificador documento
 * @param {object} date javascript
 */

export interface Identifier {
  key: string;
  timestamp: Date;
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
 * @param {string} tematica del recurso
 * @param {array} categorias a la que pertenece
 */

export interface Collection extends Item {
  theme: string;
  categories: string[];
}

/**
 * @param {number} tematica del recurso
 * @param {string} colecciones a la que pertenece
 */

export interface Resource extends Item {
  theme: string;
  collections: string[];
}
