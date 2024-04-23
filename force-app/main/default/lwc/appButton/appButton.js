import { LightningElement, api } from "lwc";

export default class AppButton extends LightningElement {
  @api title;
  @api href = "/";
}
