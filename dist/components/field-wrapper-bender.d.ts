import type { Components, JSX } from "../types/components";

interface FieldWrapperBender extends Components.FieldWrapperBender, HTMLElement {}
export const FieldWrapperBender: {
  prototype: FieldWrapperBender;
  new (): FieldWrapperBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
