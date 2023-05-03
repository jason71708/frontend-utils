/**
 * Use for generate list of string, mimic API behavior.
 * @param offset Start point
 * @param limit Maximum item
 * @returns 
 */
export const fetchItems = (offset: number = 0, limit: number = 10) => {
  return new Promise<string[]>(resolve => {
    const items: string[] = [];
    for (let i = offset; i < offset + limit; i++) {
      items.push(`Index ${i}`);
    }
    setTimeout(() => {
      resolve(items);
    }, 1500);
  });
};

let unbalanceFlag = false
/**
 * Use for delay API response at different times.
 * @param offset Start point
 * @param limit Maximum item
 * @returns 
 */
export const unbalanceFetchItems = (offset: number = 0, limit: number = 10) => {
  return new Promise<string[]>(resolve => {
    const items: string[] = [];
    for (let i = offset; i < offset + limit; i++) {
      items.push(`Index ${i}`);
    }
    unbalanceFlag = !unbalanceFlag
    let copy = unbalanceFlag
    setTimeout(() => {
      resolve(items);
      console.log('unbalanceFetchItems: ', offset, `${copy ? 'long' : 'short'}`)
    }, 1500 * (unbalanceFlag ? 3 : 1));
  });
}
