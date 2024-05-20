import { LightningElement, api } from "lwc";
import ASSETS from "@salesforce/resourceUrl/PortfolioBlog";
import { CREDENTIALS } from "c/myUtils";
import CredentialsForm from "c/credentialForm";

export default class Credentials extends LightningElement {
  @api featured = false;
  @api displayCount;

  handleAdd() {
    CredentialsForm.open({
      label: "Credential",
      size: "small"
    });
  }

  credentials;
  connectedCallback() {
    var credentials = (
      this.featured ? CREDENTIALS.featured : CREDENTIALS.courses
    ).slice(0, this.displayCount ? this.displayCount : undefined);
    credentials.forEach((c, i) => {
      credentials[i].img = `${ASSETS}${c.img}`;
    });
    this.credentials = credentials;
  }
}
