import { r as registerInstance, h } from './index-d29ca497.js';

let TextField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("field-wrapper-sb", { helpVariant: "below", componentId: this.componentId, label: this.label, labelId: this.labelledBy, message: this.message, variant: "above" }, h("text-input-sb", { defaultValue: this.defaultValue, componentId: this.componentId, labelledBy: this.labelledBy, name: this.name })));
  }
};

export { TextField as text_field_bender };
