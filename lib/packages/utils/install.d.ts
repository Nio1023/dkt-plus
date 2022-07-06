import type { Plugin } from "vue";
declare type withInstall<T> = T & Plugin;
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => withInstall<T> & E;
export declare const withNoopInstall: <T>(component: T) => withInstall<T>;
export {};
