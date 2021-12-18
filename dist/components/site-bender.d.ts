import type { Components, JSX } from "../types/components";

interface SiteBender extends Components.SiteBender, HTMLElement {}
export const SiteBender: {
  prototype: SiteBender;
  new (): SiteBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
