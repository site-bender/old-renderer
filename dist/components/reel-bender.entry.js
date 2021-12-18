import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".reel-bender{display:flex;height:var(--reel-height, auto);overflow-x:auto;overflow-y:hidden;scrollbar-color:var(--reel-thumb-color, var(--color-light))\n\t\tvar(--reel-track-color, var(--color-dark))}.reel-bender::-webkit-scrollbar{height:var(--reel-height, 1rem);display:var(--reel-scrollbar-display, block)}.reel-bender::-webkit-scrollbar-track{background-color:var(--reel-track-color, var(--color-dark))}.reel-bender::-webkit-scrollbar-thumb{background-color:var(--reel-track-color);background-image:linear-gradient(\n\t\tvar(--reel-track-color, var(--color-dark)) 0,\n\t\tvar(--reel-track-color, var(--color-dark)) 0.25rem,\n\t\tvar(--reel-thumb-color, var(--color-light)) 0.25rem,\n\t\tvar(--reel-thumb-color, var(--color-light)) 0.75rem,\n\t\tvar(--reel-track-color, var(--color-dark)) 0.75rem\n\t)}.reel-bender>*{flex:0 0 var(--reel-item-width, auto)}.reel-bender>img{height:100%;flex-basis:auto;width:auto}.reel-bender>*+*{margin-left:var(--reel-gap, 1rem)}.reel-bender.overflowing{padding-bottom:var(--reel-gap, 1rem)}";

let Reel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { childIds = [], componentId, gap = 0, height = 'auto', hideBar = false, itemWidth = '360px', style = {}, thumbColor = 'red', trackColor = 'var(--color-light, white)', } = this.config;
    return (h("div", { class: "reel-bender", id: componentId, style: Object.assign(Object.assign({}, style), { '--reel-gap': `var(--s${gap})`, '--reel-height': height, '--reel-item-width': itemWidth, '--reel-scrollbar-display': hideBar ? 'none' : 'block', '--reel-thumb-color': thumbColor, '--reel-track-color': trackColor }) }, childIds.map(id => (h(ComponentRenderer, { componentId: id })))));
  }
};
Reel.style = indexCss;

export { Reel as reel_bender };
