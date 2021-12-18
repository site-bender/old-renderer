import { r as registerInstance, h } from './index-d29ca497.js';

let HelpMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { "aria-labelledby": this.labelledBy, class: this.variant }, this.message));
  }
};

export { HelpMessage as help_message_bender };
