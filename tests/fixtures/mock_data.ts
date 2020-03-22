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
