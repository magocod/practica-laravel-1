import axios from 'axios';

export const JSONtestserver = axios.create({
  baseURL: process.env.VUE_APP_ROOTAPI,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});
