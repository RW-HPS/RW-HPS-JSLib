export type ArrayItemOf<T> = T extends Array<infer I> ? I : never
export type MapType<T, L extends [unknown, unknown][]> = {
  [K in keyof L]: L[K] extends [infer First, infer Second] 
    ? (
      First extends T ? Second : never
    ) 
    : never;
}[number];