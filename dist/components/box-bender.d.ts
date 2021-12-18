import type { Components, JSX } from "../types/components";

interface BoxBender extends Components.BoxBender, HTMLElement {}
export const BoxBender: {
  prototype: BoxBender;
  new (): BoxBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
