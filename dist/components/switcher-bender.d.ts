import type { Components, JSX } from "../types/components";

interface SwitcherBender extends Components.SwitcherBender, HTMLElement {}
export const SwitcherBender: {
  prototype: SwitcherBender;
  new (): SwitcherBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
