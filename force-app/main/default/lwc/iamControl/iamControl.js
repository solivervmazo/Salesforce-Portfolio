import { LightningElement, api, wire } from "lwc";
import isGuest from "@salesforce/user/isGuest";
import userId from "@salesforce/user/Id";
import basePath from "@salesforce/community/basePath";
import { CurrentPageReference } from "lightning/navigation";
// import hasStandardAccess from "@salesforce/customPermission/PortfolioPlatformStandardAccess";

export default class IamControl extends LightningElement {
  @api publicContent = false;
  @api showPartialRedirect = false;
  @api redirectOnError = false;
  @api error = false;
  @wire(CurrentPageReference)
  currentPageReference;

  /**
   * Determines if the content is public
   * @returns {boolean}
   */
  _getIsPublicContent() {
    return this.publicContent;
  }

  /**
   * Checks if the user is authenticated
   * @returns {boolean}
   */
  _getAuthenticated() {
    return !isGuest;
  }

  /**
   * Gets the user detail
   * @returns {Object}
   */
  _getUserDetail() {
    return isGuest
      ? {}
      : {
          userId,
          partial: this._getIsPartial(),
          authenticated: this._getAuthenticated(),
          logoutLink: this._getLogoutLink(),
          owner: this._getIsOwner(),
          permissions: this._getPermissions()
        };
  }

  /**
   * Gets the user ID from the page state
   * @returns {string|boolean}
   */
  _getPageUserId() {
    return this.currentPageReference.state.c__user ?? false;
  }

  /**
   * Checks if the current user is the owner
   * @returns {boolean}
   */
  _getIsOwner() {
    return this._getPageUserId() === userId;
  }

  /**
   * Checks if the user exists
   * @returns {boolean}
   */
  _getIsUserExist() {
    return true;
  }

  /**
   * Gets the user permissions
   * @returns {Object}
   */
  _getPermissions() {
    return {
      // standard: hasStandardAccess
    };
  }

  /**
   * Checks if the user's profile is partial or incomplete profile
   * @returns {boolean}
   */
  _getIsPartial() {
    return false;
  }

  /**
   * Gets the logout link for the user
   * @returns {string}
   */
  _getLogoutLink() {
    const sitePrefix = basePath.replace("/", "");
    return `/${sitePrefix}vforcesite/secur/logout.jsp?retUrl=${window.location.origin}`;
  }

  /**
   * Checks if the content is forbidden
   * @returns {boolean}
   */
  _isForbidden() {
    return (
      this._getIsPartial() ||
      !(this._getIsPublicContent() || this._getIsOwner())
    );
  }

  get authenticated() {
    return this._getAuthenticated();
  }

  get isForbidden() {
    return this._isForbidden();
  }

  get isShowPartialMessage() {
    return (
      this._getAuthenticated() &&
      (this.showPartialRedirect === true || this.showPartialRedirect === "true")
    );
  }

  /**
   * Handles the control event and dispatches user details
   */
  handleOnControl() {
    this.dispatchEvent(
      new CustomEvent("load", {
        detail: this._getUserDetail()
      })
    );
  }

  connectedCallback() {}

  renderedCallback() {
    this.handleOnControl();
  }
}
