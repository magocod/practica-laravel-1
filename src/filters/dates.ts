/**
 *
 */

import moment from 'moment';

// funciones fechas
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * [monthdate description]
 * @param {any} value [description]
 */
export function monthdate(value: any) {
  if (value) {
    // return new Date(value).toLocaleDateString("en-US")
    return moment(value).format('MMMM');
  }
}

/**
 * [monthnumber description]
 * @param {number} n [description]
 */
export function monthnumber(n: number) {
  if (n !== null) {
    return months[n];
  }
}

/**
 * [stringdate description]
 * @param {any} value [description]
 */
export function stringdate(value: any) {
  if (value) {
    return moment(value).format('MMMM Do YYYY, h:mm:ss a');
  }
}

/**
 * [relativetime description]
 * @param {any} value [description]
 */
export function relativetime(value: any) {
  if (value) {
    return moment(value, 'YYYYMMDD').fromNow();
  }
}

/**
 * [numberdate description]
 * @param {any} value [description]
 */
export function numberdate(value: any) {
  if (value) {
    return value.getDate();
  }
}
