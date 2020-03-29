// Inicializar Firebase cliente
import firebase from 'firebase/app';

// modulos
import 'firebase/firestore';

// configuracion
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIM,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
};

// inicializar firebase
const app = firebase.initializeApp(config);

// base de datos referencia
const dbclient = app.firestore();

// configuracion de tiempo de instantaneas en aplicacion
dbclient.settings({ timestampsInSnapshots: true });

// persistencia sin conexión
// db_client.enablePersistence();

/**
 * [firebaseexport description]
 * @param {any}    doc.data() => retornado por consulta firestore
 * @param {string} doc.id => retornado identificador objeto
 */
function firebaseexport(data: any, id: string) {
  const mold = { key: id };

  for (const prop in data) {
    if (prop === 'timestamp') {
      Object.defineProperty(
        mold,
        prop,
        {
          value: new Date(data[prop].seconds * 1000),
          writable: true,
          enumerable: true,
          configurable: true,
        },
      );
    } else {
      Object.defineProperty(
        mold,
        prop,
        {
          value: data[prop],
          writable: true,
          enumerable: true,
          configurable: true,
        },
      );
    }
  }

  return mold;
}

export { app, dbclient, firebaseexport };
