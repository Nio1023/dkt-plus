declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: null;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: null;
        required: true;
    };
    showWorldLimit: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    isComposing: import("vue").Ref<boolean>;
    focused: import("vue").Ref<boolean>;
    hovering: import("vue").Ref<boolean>;
    attrs: import("vue").ComputedRef<Record<string, unknown>>;
    props: {
        type?: string | undefined;
        size?: "small" | "default" | "large" | undefined;
        disabled?: boolean | undefined;
        placeholder?: string | undefined;
        modelValue: any;
        showWorldLimit?: boolean | undefined;
    };
    type: string;
    size: "small" | "default" | "large";
    disabled: boolean;
    placeholder: string;
    input: import("vue").ShallowRef<HTMLInputElement | undefined>;
    textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
    nativeInputValue: import("vue").ComputedRef<string>;
    _ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
    setNativeInputValue: () => void;
    emit: {
        (e: 'input', value: string): void;
        (e: 'compositionstart', event: CompositionEvent): void;
        (e: 'compositionupdate', event: CompositionEvent): void;
        (e: 'compositionend', event: CompositionEvent): void;
        (e: 'focus', event: FocusEvent): void;
        (e: 'blur', event: FocusEvent): void;
        (e: 'change', event: Event): void;
        (e: 'keydown', event: KeyboardEvent): void;
        (e: 'mouseleave', event: MouseEvent): void;
        (e: 'mouseenter', event: MouseEvent): void;
    };
    handleInput: (event: Event) => Promise<void>;
    handleCompositionStart: (event: CompositionEvent) => void;
    handleCompositionUpdate: (event: CompositionEvent) => void;
    handleCompositionEnd: (event: CompositionEvent) => void;
    focus: () => Promise<void>;
    handleFocus: (event: FocusEvent) => void;
    blur: () => void | undefined;
    handleBlur: (event: FocusEvent) => void;
    handleChange: (event: Event) => void;
    handleKeydown: (event: KeyboardEvent) => void;
    handleMouseLeave: (event: MouseEvent) => void;
    handleMouseEnter: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "compositionstart" | "compositionupdate" | "compositionend" | "focus" | "blur" | "change" | "keydown" | "mouseleave" | "mouseenter")[], "input" | "compositionstart" | "compositionupdate" | "compositionend" | "focus" | "blur" | "change" | "keydown" | "mouseleave" | "mouseenter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: null;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: null;
        required: true;
    };
    showWorldLimit: {
        type: BooleanConstructor;
        required: false;
    };
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    onCompositionstart?: ((...args: any[]) => any) | undefined;
    onCompositionupdate?: ((...args: any[]) => any) | undefined;
    onCompositionend?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onKeydown?: ((...args: any[]) => any) | undefined;
    onMouseleave?: ((...args: any[]) => any) | undefined;
    onMouseenter?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    showWorldLimit: boolean;
}>;
export default _sfc_main;
