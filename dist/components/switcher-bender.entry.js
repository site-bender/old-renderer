import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".switcher-bender{display:flex;flex-wrap:wrap;gap:var(--switcher-gap, var(--s1))}.switcher-bender>*{flex-grow:1;flex-basis:calc((var(--switcher-threshold, 30rem) - 100%) * 999)}.switcher-bender>:nth-last-child(n+calc(var(--switcher-row-limit,4)+1)),.switcher-bender>:nth-last-child(n+calc(var(--switcher-row-limit,4)+1))~*{flex-basis:100%}";

let Switcher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { childIds, componentId, gap = 0, rowLimit = 4, threshold = '30rem', style = {}, } = this.config;
    return (h("div", { class: "switcher-bender", id: componentId, style: Object.assign(Object.assign({}, style), { '--switcher-gap': `var(--s${gap})`, '--switcher-row-limit': `${rowLimit}`, '--switcher-threshold': threshold }) }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Switcher.style = indexCss;

export { Switcher as switcher_bender };
