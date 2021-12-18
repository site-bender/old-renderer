import { r as registerInstance, h } from './index-d29ca497.js';

let TextInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = '';
  }
  componentWillLoad() {
    this.value = this.defaultValue;
  }
  render() {
    return (h("input", { "aria-labelledby": this.labelledBy, id: this.componentId, name: this.name, type: "text", value: this.value }));
  }
};

export { TextInput as text_input_bender };
