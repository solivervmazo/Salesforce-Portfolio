import { LightningElement, api } from "lwc";

export default class AppIconButton extends LightningElement {
  @api wrapper = "";
  @api leftIconClass;
  @api rightIconClass;

  get computedWrapper() {
    return `app-icon-btn ${this.wrapper}`;
  }
}
