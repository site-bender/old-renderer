import type { Components, JSX } from "../types/components";

interface LabelBender extends Components.LabelBender, HTMLElement {}
export const LabelBender: {
  prototype: LabelBender;
  new (): LabelBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
