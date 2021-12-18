import type { Components, JSX } from "../types/components";

interface TextFieldBender extends Components.TextFieldBender, HTMLElement {}
export const TextFieldBender: {
  prototype: TextFieldBender;
  new (): TextFieldBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
