export type TupleToUni<T> = T extends Array<infer E> ? E : never;
