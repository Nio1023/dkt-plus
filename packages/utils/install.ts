import { NOOP } from "@vue/shared";
import type { Plugin } from "vue";

type withInstall<T> = T & Plugin;

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  (main as withInstall<T>).install = (app) => {
    for (const component of [main, ...Object.values(extra ?? {})]) {
      app.component(component.name, component);
    }
  };
  if (extra) {
    for (const [key, component] of Object.entries(extra)) {
      (main as any)[key] = component;
    }
  }
  return main as withInstall<T> & E;
};

export const withNoopInstall = <T>(component: T) => {
  (component as withInstall<T>).install = NOOP;
  return component as withInstall<T>;
};
