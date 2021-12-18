import type { Components, JSX } from "../types/components";

interface CenterBender extends Components.CenterBender, HTMLElement {}
export const CenterBender: {
  prototype: CenterBender;
  new (): CenterBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
