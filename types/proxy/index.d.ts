declare const javaObjSymbol: unique symbol;
export declare function value2java(v: {
    [javaObjSymbol]?: JavaObject;
} & unknown): JavaObject | {
    [javaObjSymbol]?: JavaObject;
};
export declare function args2java(...args: ({
    [javaObjSymbol]?: JavaObject;
} & unknown)[]): (JavaObject | {
    [javaObjSymbol]?: JavaObject;
})[];
export declare const defaultProxy: (obj: JavaObject) => {
    _: any;
};
export declare function proxy<T>(obj: {
    getClass?: unknown;
} & unknown): T;
export declare function proxyClass<T>(obj: {
    class?: unknown;
} & unknown): T;
export {};
