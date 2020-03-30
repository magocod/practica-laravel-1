/**
 *
 */

import Vue, { VueConstructor, ComponentOptions, PluginFunction, AsyncComponent } from 'vue';

import { expect, assert } from 'chai';
import {
    createLocalVue,
} from '@vue/test-utils';

import { routes } from '@/router';

import Router, { RouteConfig } from 'vue-router';
import { FunctionLazyComponent, CreateDefaultRouter } from './fixtures';

type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent;

function eagerLoadingRoutes(listRoutes: RouteConfig[], routerInstance: Router) {
  for (const route of listRoutes) {
    // verificar al menos un componente encontrado
    const components = routerInstance.getMatchedComponents(route.path);
    // assert(components.length > 0, `no matching components ${route.name} - ${route.path}`);
    console.log(components.length);
    expect(components.length).to.equal(1);
    // verificar component a renderizar y tipo de carga (ultimo en la lista)
    const rendervalue: any = components[components.length - 1];
    console.log(rendervalue.name);
    if (rendervalue.name === 'VueComponent') {
      // verificar carga ansiosa
      const loadcomponent: Component = rendervalue;
      expect(loadcomponent).to.equal(route.component);
    } else {
      // verificar carga peresoza
      const loadfunction: FunctionLazyComponent = rendervalue;
      const component: any = route.component;
      const componentName: any = component.name;
      expect(loadfunction.name).to.equal(componentName);
    }
    // verificar anidacion
    if (route.children) {
      const subroutes = route.children;
      for (const subroute of subroutes) {
        const subcomponents = routerInstance.getMatchedComponents(
          `${route.path}/${subroute.path}`,
        );
        console.log(subcomponents);
        console.log(subcomponents.length);
        expect(subcomponents.length).to.equal(2);
        // verificar component a renderizar y tipo de carga (ultimo en la lista)
        const subrendervalue: any = subcomponents[subcomponents.length - 1];
        console.log('children', subrendervalue.name);
        if (subrendervalue.name === 'VueComponent') {
          // verificar carga ansiosa
          const subloadcomponent: Component = subrendervalue;
          expect(subloadcomponent).to.equal(subroute.component);
        } else {
          // verificar carga peresoza
          const subloadfunction: FunctionLazyComponent = subrendervalue;
          const subcomponent: any = subroute.component;
          const subcomponentName: any = subcomponent.name;
          expect(subloadfunction.name).to.equal(subcomponentName);
        }
      }
    }
  }
}

describe('Config.router.routes', () => {

  let localVue: VueConstructor;
  let router: Router;

  beforeEach(() => {
    localVue = createLocalVue();
    router = CreateDefaultRouter();
  });

  it('Route (verificar configuracion rutas)', () => {
    eagerLoadingRoutes(routes, router);
  });

});
