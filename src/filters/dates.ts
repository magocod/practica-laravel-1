// libreria para fechas
import moment from 'moment';

// funciones fechas
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * @param {object} value = date object
 * funcion determinar mes a partir de texto
 */

export function monthdate(value: any) {
  if (value) {
    // return new Date(value).toLocaleDateString("en-US")
    return moment(value).format('MMMM');
  }
}

/**
 * @param {number} numero
 * funcion determinar mes a partir de numero
 */

export function monthnumber(n: number) {
  if (n !== null) {
    return months[n];
  }
}

/**
 * @param {object} value = date object
 * funcion determinar fecha a partir de cadena de texto
 */

export function stringdate(value: any) {
  if (value) {
    return moment(value).format('MMMM Do YYYY, h:mm:ss a');
  }
}

/**
 * @param {object} value = date object
 * funcion determinar fecha relativa a partir de la actual
 */

export function relativetime(value: any) {
  if (value) {
    return moment(value, 'YYYYMMDD').fromNow();
  }
}

/**
 * @param {number} value = date object
 * funcion determinar dia del mes
 */

export function numberdate(value: any) {
  if (value) {
    return value.getDate();
  }
}
