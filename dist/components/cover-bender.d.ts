import type { Components, JSX } from "../types/components";

interface CoverBender extends Components.CoverBender, HTMLElement {}
export const CoverBender: {
  prototype: CoverBender;
  new (): CoverBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
