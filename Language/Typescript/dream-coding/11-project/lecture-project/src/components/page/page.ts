import { baseComponent } from "./base/base.js";

export class PageComponent extends baseComponent {
  constructor() {
    super(document.createElement("ul"));
    this.element.setAttribute("class", "page");
    this.element.textContent = "This is PageComponent";
  }
}
