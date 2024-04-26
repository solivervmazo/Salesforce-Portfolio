import { LightningElement, api } from "lwc";

/**
 *  @slot header
 *  @slot footer
 */
export default class AppLayout extends LightningElement {
  @api color;
}
