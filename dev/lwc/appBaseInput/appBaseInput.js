import { LightningElement, api } from "lwc";

export default class AppBaseInput extends LightningElement {
  @api tag;
  @api title;
  @api hint;
  @api error;
  @api required = false;

  get computedRequired() {
    return this.required === "true" || this.required === true;
  }
}
