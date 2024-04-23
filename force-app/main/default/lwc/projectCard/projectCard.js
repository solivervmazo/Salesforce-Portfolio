import { LightningElement, api } from "lwc";
import { NavigationMixin } from "lightning/navigation";

import RESOURCES from "@salesforce/resourceUrl/PortfolioBlog";
const PROJECT_STATIC_PATH = "/Projects/";
export default class ProjectCard extends NavigationMixin(LightningElement) {
  @api project;
  img;
  href;
  title;
  tags;
  ptype;

  navigateToProject(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    this[NavigationMixin.Navigate]({
      type: "comm__namedPage",
      attributes: {
        name: "p__c"
      },
      state: {
        c__project: this.project?.id
      }
    });
  }

  connectedCallback() {
    this.img = `${RESOURCES}${PROJECT_STATIC_PATH}${this.project.dir}/${this.project.project}-img-${this.project.img}`;
    this.title = this.project.title;
    this.tags = this.project.details.tags.tags.join(", ");
    this.ptype = this.project.type
      ?.split(" ")
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(" ");
  }
}
