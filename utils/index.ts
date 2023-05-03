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
    }, 1000);
  });
};

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
    setTimeout(() => {
      resolve(items);
    }, 1000 * (Math.floor(Math.random() * 5)));
  });
}
