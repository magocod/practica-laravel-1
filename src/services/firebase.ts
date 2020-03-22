// Inicializar Firebase cliente
import firebase from 'firebase/app';

// modulos
import 'firebase/firestore';

// configuracion
const config = {
  apiKey: 'AIzaSyBuRkin0PqL4LExZ02MYm7HbRIWFm9AUDA',
  authDomain: 'vue-spa-1.firebaseapp.com',
  databaseURL: 'https://vue-spa-1.firebaseio.com',
  projectId: 'vue-spa-1',
  storageBucket: 'vue-spa-1.appspot.com',
  messagingSenderId: '179740982425',
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
