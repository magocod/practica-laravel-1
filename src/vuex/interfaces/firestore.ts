/**
 * FIRESTORE
 */

/**
 *
 */
export interface FirestoreIdentifier {
  key: string;
  timestamp: Date;
}

/**
 *
 */
export interface AuthorF extends FirestoreIdentifier {
  name: string;
}

/**
 *
 */
export interface ItemF extends FirestoreIdentifier {
  title: string;
  description: string;
}

/**
 *
 */
export interface CollectionF extends ItemF {
  theme: string;
  categories: string[];
}

/**
 *
 */
export interface ResourceF extends ItemF {
  theme: string;
  collections: string[];
}
