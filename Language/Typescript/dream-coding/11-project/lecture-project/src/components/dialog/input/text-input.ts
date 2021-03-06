import { TextData } from "./../dialog.js";
import { baseComponent } from "./../../page/common/component.js";
export class TextSectionInput
  extends baseComponent<HTMLElement>
  implements TextData {
  constructor() {
    super(`
      <div>
        <div class="form__container">
          <label for="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div class="form__container">
          <label for="body">Body</label>
          <textarea row="3" id="body"></textarea>
        </div>
      </div>
    `);
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get body(): string {
    const element = this.element.querySelector("#body")! as HTMLInputElement;
    return element.value;
  }
}
