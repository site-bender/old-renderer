import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".cover-bender{display:flex;flex-direction:column;min-height:var(--cover-min-height, 100vh);padding:var(--cover-padding, 0)}.cover-bender>*{margin-top:var(--cover-inset, 2rem);margin-bottom:var(--cover-inset, 2rem)}.cover-bender>:first-child:not(var(--centered-item)){margin-top:0}.cover-bender>:last-child:not(var(--centered-item)){margin-bottom:0}.cover-bender>.centered{margin-top:auto;margin-bottom:auto}";

let Cover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { childIds, componentId, inset = '2rem', minHeight = '100vh', padding = 0, style = {}, } = this.config;
    return (h("div", { class: "cover-bender", id: componentId, style: Object.assign(Object.assign({}, style), { '--cover-padding': `var(--s${padding})`, '--cover-inset': inset, '--cover-min-height': minHeight }) }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Cover.style = indexCss;

export { Cover as cover_bender };
