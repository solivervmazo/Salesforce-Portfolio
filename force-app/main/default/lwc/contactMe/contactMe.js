import { LightningElement } from "lwc";

const CONTACTS = [
  {
    id: 1,
    name: "Davao City, Davao del Sur Philippines, 8000",
    icon: "fa-regular fa-map"
  },
  {
    id: 2,
    name: "solivervmazo.jobs@gmail.com",
    icon: "fa-regular fa-envelope"
  },
  {
    id: 3,
    name: "github.com/solivervmazo",
    icon: "fa-brands fa-github"
  },
  {
    id: 3,
    name: "linkedin.com/in/solivervmazo/",
    icon: "fa-brands fa-linkedin-in"
  }
];

export default class ContactMe extends LightningElement {
  contacts;

  connectedCallback() {
    this.contacts = CONTACTS;
  }
}
