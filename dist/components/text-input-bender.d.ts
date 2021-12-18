import type { Components, JSX } from "../types/components";

interface TextInputBender extends Components.TextInputBender, HTMLElement {}
export const TextInputBender: {
  prototype: TextInputBender;
  new (): TextInputBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
