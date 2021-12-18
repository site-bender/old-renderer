import type { Components, JSX } from "../types/components";

interface TopperBender extends Components.TopperBender, HTMLElement {}
export const TopperBender: {
  prototype: TopperBender;
  new (): TopperBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
