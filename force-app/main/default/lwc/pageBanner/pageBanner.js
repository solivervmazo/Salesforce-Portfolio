import { LightningElement } from "lwc";
import ASSETS from "@salesforce/resourceUrl/PortfolioBlog";

export default class PageBanner extends LightningElement {
  companyBanner;

  connectedCallback() {
    this.companyBanner = ASSETS + "/Assets/images/banner.png";
  }
}
