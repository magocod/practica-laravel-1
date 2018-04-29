# Vue Repositorio

> FRONT-END del repositorio UNEFA, siguiendo los siguientes patrones

* SPA: Aplicación de página unica
* PWA: Pagina web progresiva

## FRAMEWORK

* VueJS 2.5.2 -> https://vuejs.org/
* Vuetifyjs 1.0.17 -> https://vuetifyjs.com/en/
* ExpressJS  4.16.3 -> http://expressjs.com/

## Herramientas - Vue

* Vue-router 3.0.1 -> https://router.vuejs.org/en/
* Vuex -> 3.0.1 https://vuex.vuejs.org/en/


## HTTP-cliente

``` bash
# Proxima version
Vue-resource 1.5.0 -> https://github.com/pagekit/vue-resource
Axios 0.18.0 -> https://github.com/axios/axios
```

## Estructura

* rama master -> configuracion aplicación de página única
``` bash
# Proxima version
rama pwa -> configuracion pagina web progresiva
```
## Instrucciones

``` bash
# instalar dependencias
npm install

# iniciar servidor 
node server.js

# Preparar para produccion
npm run build

# Preparar para produccion + analisis report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
