export declare type TupleToUni<T> = T extends Array<infer E> ? E : never;
export declare type VmodelEvent = {
    (UPDATE_MODEL_EVENT: string, value: string): void;
};
