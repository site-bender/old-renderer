import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".box-bender{background-color:var(--box-background-color);border:var(--box-border) solid;color:var(--box-color);padding:var(--box-padding)}.box-bender *{color:inherit}.box-bender.invert-sb{background-color:var(--box-color);color:var(--box-background-color)}";

let Reel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { invert, componentId, style, childIds } = this.config;
    const classes = ['box-bender', ...(invert ? ['invert-sb'] : [])];
    return (h("div", { class: classes.join(' '), id: componentId, style: style }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Reel.style = indexCss;

export { Reel as box_bender };
