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
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, getCurrentInstance, ref, shallowRef, watch, onMounted, createCommentVNode, createElementVNode, mergeProps, pushScopeId, popScopeId, nextTick } from "vue";
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
const isKorean = (text) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text);
function isNil(value) {
  return value == null || value == void 0;
}
function fromPairs(pairs) {
  let index = -1, length = pairs ? pairs.length : 0, result = {};
  while (++index < length) {
    let pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
const UPDATE_MODEL_EVENT = "update:modelValue";
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
const useAttrs = (params = {}) => {
  const { excludeKeys = [], excludeListeners = false } = params;
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  const instance = getCurrentInstance();
  if (!instance) {
    console.warn("[use-attrs]: getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function");
    return computed(() => ({}));
  }
  return computed(() => {
    var _a;
    return fromPairs(Object.entries((_a = instance.proxy) == null ? void 0 : _a.$attrs).filter(([key]) => !allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};
var input_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-75aa2896"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "dkt-input__prepend"
};
const _hoisted_2 = {
  key: 0,
  class: "dkt-input__prefix"
};
const _hoisted_3 = ["type", "disabled", "placeholder"];
const _hoisted_4 = {
  key: 1,
  class: "dkt-input__suffix"
};
const _hoisted_5 = { class: "dkt-input__suffix--inner" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, null, -1));
const _hoisted_7 = {
  key: 1,
  class: "dkt-input__append"
};
const _hoisted_8 = {
  key: 1,
  class: "dkt-textarea"
};
const _hoisted_9 = ["disabled", "placeholder"];
const __default__ = {
  name: "DktInput"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    type: null,
    size: null,
    disabled: { type: Boolean },
    placeholder: null,
    modelValue: null,
    showWorldLimit: { type: Boolean }
  },
  emits: ["input", "compositionstart", "compositionupdate", "compositionend", "focus", "blur", "change", "keydown", "mouseleave", "mouseenter"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const isComposing = ref(false);
    const focused = ref(false);
    const hovering = ref(false);
    useAttrs();
    const { type = "text", size = "default", disabled = false, placeholder = "" } = props;
    const input = shallowRef();
    const textarea = shallowRef();
    const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
    const _ref = computed(() => input.value || textarea.value);
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const handleInput = async (event) => {
      let { value } = event.target;
      if (isComposing.value)
        return;
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await nextTick();
      setNativeInputValue();
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a;
      emit("compositionupdate", event);
      const text = (_a = event.target) == null ? void 0 : _a.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (!isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const focus = async () => {
      var _a;
      await nextTick();
      (_a = _ref.value) == null ? void 0 : _a.focus();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const blur = () => {
      var _a;
      return (_a = _ref.value) == null ? void 0 : _a.blur();
    };
    const handleBlur = (event) => {
      focused.value = false;
      emit("blur", event);
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const handleKeydown = (event) => {
      emit("keydown", event);
    };
    const handleMouseLeave = (event) => {
      hovering.value = false;
      emit("mouseleave", event);
    };
    const handleMouseEnter = (event) => {
      hovering.value = true;
      emit("mouseenter", event);
    };
    watch(nativeInputValue, () => setNativeInputValue());
    onMounted(() => {
      setNativeInputValue();
    });
    expose({
      input,
      textarea,
      ref: _ref,
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return unref(type) != "textarea" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["dkt-input", [
          {
            ["dkt-input--" + unref(size)]: unref(size) != "default",
            "dkt-input--prepend": _ctx.$slots.prepend,
            "dkt-input--append": _ctx.$slots.append,
            "is-disabled": unref(disabled)
          },
          _ctx.$attrs.class
        ]]),
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "prepend", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["dkt-input__wrapper", {
            "is-focused": focused.value
          }])
        }, [
          _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createElementVNode("input", mergeProps(_ctx.$attrs, {
            class: "dkt-input__inner",
            ref_key: "input",
            ref: input,
            type: unref(type),
            disabled: unref(disabled),
            placeholder: unref(placeholder),
            onCompositionstart: handleCompositionStart,
            onCompositionupdate: handleCompositionUpdate,
            onCompositionend: handleCompositionEnd,
            onInput: handleInput,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, _hoisted_3),
          _ctx.$slots.suffix ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createElementVNode("span", _hoisted_5, [
              createElementVNode("template", null, [
                renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
              ]),
              _hoisted_6
            ])
          ])) : createCommentVNode("", true)
        ], 2),
        _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_7, [
          renderSlot(_ctx.$slots, "append", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 34)) : (openBlock(), createElementBlock("div", _hoisted_8, [
        createElementVNode("textarea", mergeProps({
          class: "dkt-textarea__inner",
          ref_key: "textarea",
          ref: textarea,
          disabled: unref(disabled),
          placeholder: unref(placeholder),
          onCompositionstart: handleCompositionStart,
          onCompositionupdate: handleCompositionUpdate,
          onCompositionend: handleCompositionEnd,
          onInput: handleInput,
          onFocus: handleFocus,
          onBlur: handleBlur,
          onChange: handleChange,
          onKeydown: handleKeydown
        }, _ctx.$attrs), null, 16, _hoisted_9)
      ]));
    };
  }
}));
var Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75aa2896"]]);
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
