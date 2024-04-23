import { LightningElement } from "lwc";
import { FOLLOW_ME } from "c/myUtils";
export default class PageFooter extends LightningElement {
  socmeds;

  connectedCallback() {
    this.socmeds = FOLLOW_ME;
  }
}
