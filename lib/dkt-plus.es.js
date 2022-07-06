var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode, createElementVNode, mergeProps } from "vue";
var button_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$1 = {
  name: "DktButton"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  props: {
    type: { default: "default" },
    size: { default: "default" },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const classObject = computed(() => ({
      ["dkt-button--" + __props.size]: __props.size != "default",
      ["dkt-button--" + __props.type]: __props.type != "default",
      loading: __props.loading,
      disabled: __props.disabled
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["dkt-button", unref(classObject)])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
}));
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2c84f22e"]]);
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const component of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(component.name, component);
    }
  };
  if (extra) {
    for (const [key, component] of Object.entries(extra)) {
      main[key] = component;
    }
  }
  return main;
};
const DktButton = withInstall(Button);
var input_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = {
  key: 0,
  class: "dkt-input__prepend"
};
const _hoisted_2 = { class: "dkt-input__wrapper" };
const _hoisted_3 = {
  key: 0,
  class: "dkt-input__prefix"
};
const _hoisted_4 = ["type"];
const _hoisted_5 = {
  key: 1,
  class: "dkt-input__suffix"
};
const _hoisted_6 = {
  key: 1,
  class: "dkt-input__append"
};
const _hoisted_7 = { key: 1 };
const __default__ = {
  name: "DktInput"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    type: { default: "text" },
    size: { default: "default" }
  },
  emits: ["input"],
  setup(__props, { emit }) {
    const handleInput = (event) => {
      let { value } = event.target;
      emit("input", value);
    };
    return (_ctx, _cache) => {
      return __props.type != "textarea" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["dkt-input", [
          {
            ["dkt-input--" + __props.size]: __props.size != "default",
            "dkt-input--prepend": _ctx.$slots.prepend,
            "dkt-input--append": _ctx.$slots.append
          }
        ]])
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "prepend", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_2, [
          _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createElementVNode("input", mergeProps(_ctx.$attrs, {
            class: "dkt-input__inner",
            onInput: handleInput,
            type: __props.type
          }), null, 16, _hoisted_4),
          _ctx.$slots.suffix ? (openBlock(), createElementBlock("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
          ])) : createCommentVNode("", true)
        ]),
        _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "append", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 2)) : (openBlock(), createElementBlock("div", _hoisted_7, [
        createElementVNode("textarea", mergeProps({
          name: "",
          id: "",
          cols: "30",
          rows: "10"
        }, _ctx.$attrs), null, 16)
      ]));
    };
  }
}));
var Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-418148f4"]]);
const DktInput = withInstall(Input);
var Components = [DktButton, DktInput];
const makeInstaller = (components = []) => {
  const install2 = (app) => {
    components.forEach((component) => {
      app.use(component);
    });
  };
  return {
    install: install2
  };
};
var installer = makeInstaller([...Components]);
const install = installer.install;
export { installer as default, install };
