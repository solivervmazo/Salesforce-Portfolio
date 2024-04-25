import { LightningElement } from "lwc";
import ASSETS from "@salesforce/resourceUrl/PortfolioBlog";
/**
 * @slot menu
 * @slot menu-mobile
 */
export default class NavigationMenu extends LightningElement {
  companyLogo;
  showMenu = false;
  menuClass;
  isMobile = false;

  setMenu() {
    this.isMobile = window.matchMedia("screen and (min-width: 640px)").matches;
    this.menuClass = `nav-items-container ${this.isMobile ? "open" : "closed"}`;
  }

  handleWindowResize = () => {
    this.setMenu();
  };

  toggleMenu() {
    this.menuClass = `nav-items-container ${this.showMenu ? "closed" : "open"}`;
    this.showMenu = !this.showMenu;
  }

  connectedCallback() {
    // max-width: 768px
    window.addEventListener("resize", this.handleWindowResize);
    this.setMenu();
    this.companyLogo = ASSETS + "/Assets/images/logo-dark.png";
  }
}
