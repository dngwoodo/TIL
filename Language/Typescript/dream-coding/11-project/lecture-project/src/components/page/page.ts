import { baseComponent } from "./component.js";

export class PageComponent extends baseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class='page'>This is PageComponent</ul>`);
  }
}
