/**
 *
 */

import { routes } from '@/router';
import Router, { RouteConfig } from 'vue-router';

/**
 * [FunctionLazyComponent description]
 * carga de componentes asincronos vue
 */
export type FunctionLazyComponent = () => Promise<any>;

/**
 * [AuthFunction description]
 */
export type metaFunction = () => any;

/**
 * [CreateHistoryRouter description]
 * Devolver una instancia de router
 */
export function CreateHistoryRouter(routes: RouteConfig[]) {
    const router = new Router({
      mode: 'history',
      base: process.env.BASE_URL,
      routes,
    });
    // router.beforeEach(funcion aqui o logica aqui...);
    return router;
}

/**
 * [CreateDefaultRouter description]
 * devolver una instancia de router con una
 * configuracion por defecto
 */
export const CreateDefaultRouter = () => {
    return CreateHistoryRouter(routes);
};
