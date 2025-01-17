// themeSwitcher.js
import { LightningElement } from "lwc";

const DARK = "dark";
const LIGHT = "light";
export default class ThemeSwitcher extends LightningElement {
  theme;
  icon;
  connectedCallback() {
    if (!localStorage.theme) {
      this.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? DARK
        : LIGHT;
    } else {
      this.theme = localStorage.getItem("theme");
    }
    this.setTheme();
  }

  setTheme() {
    this.icon = `fa-regular ${this.theme === DARK ? "fa-sun" : "fa-moon"}`;
    document.documentElement.setAttribute("data-theme", this.theme);
    localStorage.setItem("theme", this.theme);
  }

  toggleTheme(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.theme = this.theme === DARK ? LIGHT : DARK;
    this.setTheme();
  }
}