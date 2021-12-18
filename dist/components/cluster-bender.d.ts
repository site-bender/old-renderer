import type { Components, JSX } from "../types/components";

interface ClusterBender extends Components.ClusterBender, HTMLElement {}
export const ClusterBender: {
  prototype: ClusterBender;
  new (): ClusterBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
