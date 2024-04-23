import { LightningElement } from "lwc";

export const FOLLOW_ME = [
  {
    id: 1,
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    url: "https://linkedin.com/in/solivervmazo"
  },
  {
    id: 2,
    name: "GitHub",
    icon: "fa-brands fa-github",
    url: "https://github.com/solivervmazo"
  },
  {
    id: 3,
    name: "Kaggle",
    icon: "fa-brands fa-kaggle",
    url: "https://www.kaggle.com/solivermazo"
  }
];

export default class PageFooter extends LightningElement {
  socmeds;

  connectedCallback() {
    this.socmeds = FOLLOW_ME;
  }
}
