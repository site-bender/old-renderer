import type { Components, JSX } from "../types/components";

interface FrameBender extends Components.FrameBender, HTMLElement {}
export const FrameBender: {
  prototype: FrameBender;
  new (): FrameBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
