import type { Components, JSX } from "../types/components";

interface GridBender extends Components.GridBender, HTMLElement {}
export const GridBender: {
  prototype: GridBender;
  new (): GridBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
