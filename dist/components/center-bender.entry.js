import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".center-bender{box-sizing:content-box;margin-left:auto;margin-right:auto;text-align:center;max-width:var(--measure);padding-left:var(--center-gutter, 0);padding-right:var(--center-gutter, 0);display:flex;flex-direction:column;align-items:center}";

let Center = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { childIds, componentId, gutter = 0, style = {} } = this.config;
    return (h("div", { class: "center-bender", id: componentId, style: Object.assign(Object.assign({}, style), { '--center-gutter': `var(--s${gutter})` }) }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Center.style = indexCss;

export { Center as center_bender };
