import { r as registerInstance, h } from './index-d29ca497.js';

let Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("label", { htmlFor: this.labelledId, class: this.variant }, this.label));
  }
};

export { Label as label_bender };
