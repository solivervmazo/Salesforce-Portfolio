import { LightningElement, track, wire } from "lwc";
import { NavigationMixin, CurrentPageReference } from "lightning/navigation";
import isGuest from "@salesforce/user/isGuest";
import ASSETS from "@salesforce/resourceUrl/PortfolioBlog";
import {
  LOGIN_PAGE,
  PROJECTS_PAGE,
  ABOUT_PAGE,
  CONTACT_PAGE,
  CREDENTIALS_PAGE,
  PROJECT_FORM_PAGE,
  REGISTRATION_SETUP_PAGE,
  USER_SETTINGS_PAGE
} from "c/myUtils";

const AUTHENTICATED_PAGES = [
  PROJECT_FORM_PAGE,
  REGISTRATION_SETUP_PAGE,
  USER_SETTINGS_PAGE
];

/**
 * @slot menu
 * @slot menu-mobile
 */
export default class NavigationMenu extends NavigationMixin(LightningElement) {
  companyLogo;
  iam;
  isMobile = false;
  menuClass;
  showMenu = false;
  theme;
  themeObserver;

  @wire(CurrentPageReference)
  currentPageReference;

  @track
  _pages = [
    { key: PROJECTS_PAGE, title: "Projects" },
    { key: ABOUT_PAGE, title: "About Me" },
    { key: CONTACT_PAGE, title: "Contact" },
    { key: CREDENTIALS_PAGE, title: "Credentials" }
  ];

  /**
   * Determines if the current page needs authentication
   * @returns {boolean}
   */
  _getIsPageNeedsAuthentication() {
    const pageName = this.currentPageReference?.attributes?.name;
    return AUTHENTICATED_PAGES.includes(pageName);
  }

  /**
   * Forces a redirect to the login page if necessary
   */
  _forceRedirect() {
    const forceRedirect = isGuest && this._getIsPageNeedsAuthentication();

    if (forceRedirect) {
      this[NavigationMixin.Navigate]({
        type: "comm__namedPage",
        attributes: {
          name: LOGIN_PAGE
        }
      });
    }
  }

  /**
   * Generates URLs for all pages
   */
  _generatePages() {
    this._pages.forEach(async (page, i) => {
      this._pages[i] = {
        ...page,
        url: await this[NavigationMixin.GenerateUrl]({
          type: "comm__namedPage",
          attributes: {
            name: page.key
          },
          state: {
            c__user: 1
          }
        }).then((url) => {
          return url;
        })
      };
    });
  }

  /**
   * Sets the menu based on the screen size
   */
  _setMenu() {
    this.isMobile = window.matchMedia("screen and (min-width: 640px)").matches;
    this.menuClass = `nav-items-container ${this.isMobile ? "open" : "closed"}`;
  }

  get authenticated() {
    return this.iam?.userId ? true : false;
  }

  get logoutLink() {
    return this.iam?.logoutLink ?? "/";
  }

  get pages() {
    return this._pages;
  }

  /**
   * Handles changes in the theme
   * @param {MutationRecord[]} mutationsList
   */
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

  /**
   * Handles window resize events
   */
  handleWindowResize = () => {
    this._setMenu();
  };

  /**
   * Handles IAM events
   * @param {Event} evt
   */
  handleIam(evt) {
    this.iam = evt.detail;
  }

  handleNavigateToSettings() {
    this[NavigationMixin.Navigate]({
      type: "comm__namedPage",
      attributes: {
        name: USER_SETTINGS_PAGE
      }
    });
  }

  connectedCallback() {
    // max-width: 768px
    this.companyLogo = ASSETS + "/Assets/images/logo-dark.png";
    this.theme = localStorage?.getItem("theme") ?? "";
    this.observer = new MutationObserver(this.handleThemeChange);
    this.observer.observe(document.documentElement, { attributes: true });
    window.addEventListener("resize", this.handleWindowResize);
    this._forceRedirect();
    this._generatePages();
    this._setMenu();
  }

  toggleMenu() {
    this.menuClass = `nav-items-container ${this.showMenu ? "closed" : "open"}`;
    this.showMenu = !this.showMenu;
  }
}
