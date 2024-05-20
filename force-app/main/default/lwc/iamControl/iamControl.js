import { LightningElement } from "lwc";

export default class IamControl extends LightningElement {
  allowed = false;

  handleOnControl() {
    this.dispatchEvent(
      new CustomEvent("load", {
        detail: {}
      })
    );
  }

  connectedCallback() {
    this.allowed = true;
  }

  renderedCallback() {
    this.handleOnControl();
  }
}
