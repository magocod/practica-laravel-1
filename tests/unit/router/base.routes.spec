import { VueConstructor } from 'vue';

import { expect, assert } from 'chai';
import {
    createLocalVue,
} from '@vue/test-utils';

import HomeComponent from '@/views/Home/Home.vue';
import Error404 from '@/views/errors/Error404/Error404.vue';
import AuthorList from '@/components/author/AuthorList/AuthorList.vue';

import Router from 'vue-router';
import { FunctionLazyComponent, CreateDefaultRouter } from './fixtures';

describe('Base.router.routes', () => {

  let localVue: VueConstructor;
  let router: Router;

  beforeEach(() => {
    localVue = createLocalVue();
    router = CreateDefaultRouter();
  });

  // afterEach(() => {
  //   // pass
  // });

  it('Route (/) (ruta base) (carga ansiosa) (component Home)', async () => {
    console.log(router);
    const components = router.getMatchedComponents('/');
    expect(components.length).to.equal(1);
    // console.log(components[0]);
    // console.log(HomeComponent);
    console.log(components[0].name);
    // expect(components[0].name).to.equal('Home');
    expect(components[0]).to.equal(HomeComponent);
  });

  it('Route (*) (error 404) (carga perezosa) (component error404)', async () => {
    const components = router.getMatchedComponents('/no_exist');
    expect(components.length).to.equal(1);
    // console.log(components);
    const res: any = components[0];
    const func: FunctionLazyComponent = res;
    // console.log(func.name);;
    expect(func.name).to.equal('LazyError404');
    // console.log(await func());
    const loadModule = await func();
    // console.log(loadModule);
    // console.log(loadModule.default);
    // console.log(Error404);
    expect(loadModule.default).to.equal(Error404);
  });

  it('Route (/authors) (Lista Autores) (carga perezosa) (component AuthorList)', async () => {
    const components = router.getMatchedComponents('/public/authors/');
    // console.log(components);
    // console.log(components);
    assert(components.length > 0, 'components not matched');
    const res: any = components[components.length - 1];
    const func: FunctionLazyComponent = res;
    console.log(func.name);
    expect(func.name).to.equal('LazyAuthorList');
    // console.log(await func());
    const loadModule = await func();
    // console.log(loadModule);
    // console.log(loadModule.default);
    expect(loadModule.default).to.equal(AuthorList);
  });

});
