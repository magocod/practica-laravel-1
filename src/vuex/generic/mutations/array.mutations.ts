/**
 * Mutaciones de store genericas
 * Nota:
 * - se abandona la inferencia de tipos
 * - asegurarse que store pase las pruebas unitarias
 */

export const setArray = (propertyName: string) => (state: any, payload: any[]) => {
  state[propertyName] = payload;
};

export const pushArray = (propertyName: string) => (state: any, payload: any) => {
  const value = state[propertyName].find((element: any) => {
    return element.id === payload.id;
  });
  if (value === undefined) {
    state[propertyName].push(payload);
  }
};

export const updateValueArray = (propertyName: string) => (state: any, payload: any) => {
  const indexupdate = state[propertyName].findIndex((element: any) => {
    return element.id === payload.id;
  });
  if (indexupdate > -1) {
    state[propertyName].splice(indexupdate, 1, payload);
  }
};

export const deleteValueArray = (propertyName: string) => (state: any, payload: any) => {
  const indexdelete = state[propertyName].findIndex((element: any) => {
    return element.id === payload.id;
  });
  if (indexdelete > -1) {
    state[propertyName].splice(indexdelete, 1);
  }
};
