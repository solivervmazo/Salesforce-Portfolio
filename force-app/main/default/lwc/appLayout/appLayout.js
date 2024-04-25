import { LightningElement, api } from "lwc";

/**
 *  @slot header
 *  @slot footer
 */
export default class AppLayout extends LightningElement {
  @api color;

  changeColor() {
    // this.color
  }

  renderedCallback() {
    console.log("INIT ", this.color);
  }
}
