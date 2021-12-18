import type { Components, JSX } from "../types/components";

interface HelpMessageBender extends Components.HelpMessageBender, HTMLElement {}
export const HelpMessageBender: {
  prototype: HelpMessageBender;
  new (): HelpMessageBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
