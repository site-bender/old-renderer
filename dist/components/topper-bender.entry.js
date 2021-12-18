import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".topper-bender{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.topper-bender.contain{--margin:var(--topper-margin, 0);overflow:auto;max-width:calc(100% - (var(--margin) * 2));max-height:calc(100% - (var(--margin) * 2))}.topper-bender.fixed{position:fixed}";

let Topper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { childIds, componentId, margin = 0, style = {} } = this.config;
    return (h("div", { class: "topper-bender", id: componentId, style: Object.assign(Object.assign({}, style), { '--topper-margin': `var(--s${margin})` }) }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Topper.style = indexCss;

export { Topper as topper_bender };
