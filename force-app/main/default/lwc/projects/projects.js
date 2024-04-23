import { LightningElement, api } from "lwc";
import { PROJECTS } from "c/myUtils";

export default class Projects extends LightningElement {
  @api displayCount;
  projects;

  connectedCallback() {
    this.projects = PROJECTS.slice(
      0,
      this.displayCount ? this.displayCount : undefined
    );
  }
}
