import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".frame-bender{--n:var(--frame-relative-height, 9);--d:var(--frame-relative-width, 16);padding-bottom:calc(var(--n) / var(--d) * 100%);position:relative}.frame-bender>*{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;display:flex;justify-content:center;align-items:center}.frame-bender>img,.frame-bender>video{width:100%;height:100%;object-fit:cover}";

let Frame = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { childIds, componentId, relativeHeight = 9, relativeWidth = 16, style = {}, } = this.config;
    return (h("div", { class: "frame-bender", id: componentId, style: Object.assign(Object.assign({}, style), { '--frame-relative-height': `${relativeHeight}`, '--frame-relative-width': `${relativeWidth}` }) }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Frame.style = indexCss;

export { Frame as frame_bender };
