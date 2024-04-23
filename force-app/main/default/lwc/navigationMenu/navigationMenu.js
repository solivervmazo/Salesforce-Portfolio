import { LightningElement } from "lwc";
import ASSETS from "@salesforce/resourceUrl/PortfolioBlog";

export default class NavigationMenu extends LightningElement {
  companyLogo;

  connectedCallback() {
    this.companyLogo = ASSETS + "/Assets/images/logo-dark.png";
  }
}
