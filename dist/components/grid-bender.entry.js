import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".grid-bender{display:grid;grid-gap:var(--grid-gap, 1rem)}@supports (width: min(var(--grid-cell-width), 100%)){.grid-bender{grid-template-columns:repeat(\n\t\t\tauto-fit,\n\t\t\tminmax(min(var(--grid-cell-width), 100%), 1fr)\n\t\t)}}";

let Grid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { childIds, componentId, gap = 1, minItemWidth = '250px', style = {}, } = this.config;
    return (h("div", { class: "grid-bender", id: componentId, style: Object.assign(Object.assign({}, style), { '--grid-gap': `var(--s${gap})`, '--grid-cell-width': minItemWidth }) }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Grid.style = indexCss;

export { Grid as grid_bender };
