import { r as registerInstance, h } from './index-d29ca497.js';
import { C as ComponentRenderer } from './index-ca4d34ea.js';

const indexCss = ".stack-bender{display:flex;flex-direction:column;justify-content:flex-start}.stack-bender>*{margin-top:0;margin-bottom:0}.stack-bender>*+*{margin-top:var(--stack-gap, 1rem)}.stack-bender.nested *{margin-top:0;margin-bottom:0}.stack-bender.nested *+*{margin-top:var(--stack-gap, 1rem)}.stack-bender:only-child{height:100%}.stack-bender.split>:nth-child(var(--stack-split-index)){margin-bottom:auto}";

let Stack = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { childIds, componentId, gap = 0, nest, splitAt, style = {}, } = this.config;
    const classes = [
      'stack-bender',
      ...(nest ? ['nested'] : []),
      ...(splitAt ? ['split'] : []),
    ];
    return (h("div", { class: classes.join(' '), id: componentId, style: Object.assign(Object.assign({}, style), { '--stack-gap': `var(--s${gap})`, '--stack-split-index': splitAt ? `${splitAt}` : undefined }) }, childIds.map(componentId => (h(ComponentRenderer, { componentId: componentId })))));
  }
};
Stack.style = indexCss;

export { Stack as stack_bender };
