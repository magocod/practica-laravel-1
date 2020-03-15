/**
 * FIRESTORE
 */

/**
 *
 */
export interface Identifier {
  key: string;
  timestamp: Date;
}

/**
 *
 */
export interface Author extends Identifier {
  name: string;
}

/**
 *
 */
export interface Item extends Identifier {
  title: string;
  description: string;
}

/**
 *
 */
export interface Collection extends Item {
  theme: string;
  categories: string[];
}

/**
 *
 */
export interface Resource extends Item {
  theme: string;
  collections: string[];
}
