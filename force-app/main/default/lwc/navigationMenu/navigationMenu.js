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
  theme;
  themeObserver;

  setMenu() {
    this.isMobile = window.matchMedia("screen and (min-width: 640px)").matches;
    this.menuClass = `nav-items-container ${this.isMobile ? "open" : "closed"}`;
  }

  handleWindowResize = () => {
    this.setMenu();
  };

  handleThemeChange = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type !== "attributes" ||
        mutation.attributeName !== "data-theme"
      ) {
        return;
      }
      this.companyLogo =
        ASSETS +
        `/Assets/images/logo-${mutation.target.getAttribute("data-theme") === "dark" ? "light" : "dark"}.png`;
    }
  };

  toggleMenu() {
    this.menuClass = `nav-items-container ${this.showMenu ? "closed" : "open"}`;
    this.showMenu = !this.showMenu;
  }

  connectedCallback() {
    // max-width: 768px
    this.companyLogo = ASSETS + "/Assets/images/logo-dark.png";
    this.theme = localStorage?.getItem("theme") ?? "";
    this.observer = new MutationObserver(this.handleThemeChange);
    this.observer.observe(document.documentElement, { attributes: true });
    window.addEventListener("resize", this.handleWindowResize);
    this.setMenu();
  }
}