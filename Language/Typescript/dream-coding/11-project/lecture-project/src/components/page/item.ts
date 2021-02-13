import { baseComponent } from "./component.js";

export class ItemComponent extends baseComponent<HTMLLIElement> {
  constructor() {
    super(`<li class='item'></li>`);
  }
}
