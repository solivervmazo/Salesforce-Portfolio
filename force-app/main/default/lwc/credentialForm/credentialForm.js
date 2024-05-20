import LightningModal from "lightning/modal";
import { api } from "lwc";

export default class CredentialForm extends LightningModal {
  @api action = "create";
  get title() {
    return `${this.action === "create" ? "New" : "Edit"} Credential`;
  }
  handleClose() {
    this.close();
  }
}
