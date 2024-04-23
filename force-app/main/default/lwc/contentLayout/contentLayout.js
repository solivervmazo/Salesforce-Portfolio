import { LightningElement, api } from "lwc";

/**
 * @slot banner
 * @slot content
 */
export default class ContentLayout extends LightningElement {
  @api title;
}
