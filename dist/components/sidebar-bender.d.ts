import type { Components, JSX } from "../types/components";

interface SidebarBender extends Components.SidebarBender, HTMLElement {}
export const SidebarBender: {
  prototype: SidebarBender;
  new (): SidebarBender;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
