import type { ComputedRef } from 'vue';
interface Params {
    excludeListeners?: boolean;
    excludeKeys?: Array<string>;
}
export declare const useAttrs: (params?: Params) => ComputedRef<Record<string, unknown>>;
export {};
