import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".cluster-bender{display:flex;flex-wrap:wrap;gap:var(--space, var(--cluster-gap, 1rem));justify-content:var(--cluster-justify, flex-start);align-items:var(--cluster-align, center)}";

let Cluster = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { align = 'center', childIds, componentId, gap = '1rem', justify = 'flex-start', style = {}, } = this.config;
    return (h("div", { class: "cluster-bender", id: componentId, style: Object.assign(Object.assign({}, style), { '--cluster-align': align, '--cluster-gap': `var(--s${gap})`, '--cluster-justify': justify }) }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Cluster.style = indexCss;

export { Cluster as cluster_bender };
