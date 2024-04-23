import { LightningElement, api } from "lwc";

/**
 *  @slot content
 *  @slot actions
 */
export default class SectionLayout extends LightningElement {
  @api title;
}
