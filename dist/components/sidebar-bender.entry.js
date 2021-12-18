import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".has-sidebar-bender{display:flex;flex-wrap:wrap;gap:var(--sidebar-gutter, var(--s1))}.has-sidebar-bender.no-stretch{align-items:flex-start}.has-sidebar-bender.left>:first-child{flex-grow:1}.has-sidebar-bender.left.side-width>:first-child{flex-basis:var(--sidebar-side-width)}.has-sidebar-bender.left>:last-child{flex-basis:0;flex-grow:999;min-width:var(--sidebar-min-width, 50%)}.has-sidebar-bender.right>:last-child{flex-grow:1}.has-sidebar-bender.right.side-width>:last-child{flex-basis:var(--sidebar-side-width)}.has-sidebar-bender.right>:first-child{flex-basis:0;flex-grow:999;min-width:var(--sidebar-min-width, 50%)}";

let Sidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { childIds, componentId, gutter = 3, minWidth = '30%', noStretch = false, onRight = false, sideWidth, style = {}, } = this.config;
    const classes = [
      'has-sidebar-bender',
      ...(onRight ? ['right'] : ['left']),
      ...(noStretch ? ['no-stretch'] : []),
      ...(sideWidth ? ['side-width'] : []),
    ];
    return (h("div", { class: classes.join(' '), id: componentId, style: Object.assign(Object.assign({}, style), { '--sidebar-gutter': `var(--s${gutter})`, '--sidebar-min-width': minWidth, '--sidebar-side-width': sideWidth }) }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Sidebar.style = indexCss;

export { Sidebar as sidebar_bender };
