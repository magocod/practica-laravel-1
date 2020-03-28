/**
 *
 */

/**
 * [GenerateGenericList description]
 */
export function GenerateGenericList(quantity: number): any[] {
  const arr = [];
  for (let i = 0; i < quantity; i++) {
    arr.push({
      id: i,
      other: '...',
    });
  }
  return arr;
}

/**
 * [randomRangeInteger description]
 */
export function randomRangeInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
