import { r as registerInstance, h, e as Host } from './index-d29ca497.js';

let FieldWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, this.variant === 'above' || this.variant === 'before' ? (h("label-sb", { labelledId: this.componentId, label: this.label, variant: this.variant })) : undefined, this.helpVariant === 'above' || this.helpVariant === 'before' ? (h("help-message-sb", { labelledBy: this.componentId, message: this.message, variant: this.variant })) : undefined, h("slot", null), this.helpVariant === 'after' || this.helpVariant === 'below' ? (h("help-message-sb", { labelledBy: this.componentId, message: this.message, variant: this.variant })) : undefined, this.variant === 'after' || this.variant === 'below' ? (h("label-sb", { labelledId: this.componentId, label: this.label, variant: this.variant })) : undefined));
  }
};

export { FieldWrapper as field_wrapper_bender };
