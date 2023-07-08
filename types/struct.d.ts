export interface SeqArray<T> extends Iterable<T> {
    readonly length: number;
    [index: number]: T | undefined;
    push(v: T): T | undefined;
    pop(): T | undefined;
}
export interface ObjMap<K, V> extends Iterable<[K, V]> {
    readonly size: number;
    get(k: K): V | undefined;
    set(k: K, v: V): V | undefined;
}
