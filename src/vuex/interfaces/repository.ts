/**
 * JSON SERVER
 */

/**
 *
 */
export interface SqlIdentifier {
  id: number;
}


/**
 *
 */
export interface AuthorSql extends SqlIdentifier {
  name: string;
}

/**
 *
 */
export interface ItemSql extends SqlIdentifier {
  title: string;
  description: string;
}

/**
 *
 */
export interface CollectionSql extends ItemSql {
  theme: number;
  categories: number[];
}

/**
 *
 */
export interface ResourceSql extends ItemSql {
  theme: number;
  collections: number[];
}
