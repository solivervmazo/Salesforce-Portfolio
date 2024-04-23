import { LightningElement, wire } from "lwc";
import { loadStyle, loadScript } from "lightning/platformResourceLoader";
import { CurrentPageReference } from "lightning/navigation";
import RESOURCES from "@salesforce/resourceUrl/PortfolioBlog";
import { SOCIAL_SHARES, getProject, getReadme } from "c/myUtils";
const PROJECT_STATIC_PATH = "/Projects/";
const SCRIPT_STATIC_PATH = "/Scripts/";

const PROJECT_ID = "london_bike_sharing_eda_with_python_vvq9jp";

export default class Project extends LightningElement {
  rendered = false;
  project;
  gallery = [];
  tags;
  socShares;
  @wire(CurrentPageReference)
  currentPageReference;

  renderMarkdown() {
    // eslint-disable-next-line no-unused-vars
    let markdownRaw = getReadme(this.project.id);
    // eslint-disable-next-line @lwc/lwc/no-inner-html, no-undef
    this.template.querySelector("div.md").innerHTML = marked.parse(
      markdownRaw.readme
    );
    // eslint-disable-next-line no-undef
    hljs.highlightAll();
  }

  renderedCallback() {
    if (!this.rendered) {
      this.rendered = true;
      const MARKDOWN = `${RESOURCES}${SCRIPT_STATIC_PATH}markdown.min.js`;
      const HIGHLIGHT = `${RESOURCES}${SCRIPT_STATIC_PATH}highlight/`;
      loadScript(this, MARKDOWN).then(() => {
        loadScript(this, `${HIGHLIGHT}highlight.min.js`).then(() => {
          loadStyle(this, `${HIGHLIGHT}highlight.min.css`);
          loadScript(this, `${HIGHLIGHT}python.min.js`);
          loadScript(this, `${HIGHLIGHT}sql.min.js`);
          this.renderMarkdown();
        });
      });
    }
  }

  connectedCallback() {
    const projectId = this.currentPageReference.state.c__project ?? PROJECT_ID;
    this.project = getProject(projectId);
    this.project.src.images.forEach((img) => {
      const href = `${RESOURCES}${PROJECT_STATIC_PATH}${this.project.dir}/${this.project.project}-img-${img}`;
      this.gallery.push({
        id: this.project.id,
        href: href,
        alt: this.project.project
      });
    });
    this.tags = this.project.details?.tags?.tags?.join(", ");
    this.socShares = SOCIAL_SHARES;
  }
}
