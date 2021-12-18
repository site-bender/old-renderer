import type { Components, JSX } from "../types/components";

interface StackBender extends Components.StackBender, HTMLElement {}
export const StackBender: {
  prototype: StackBender;
  new (): StackBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
