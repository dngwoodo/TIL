import { baseComponent } from "./../../page/common/component.js";
export class MediaSectionInput extends baseComponent<HTMLElement> {
  constructor() {
    super(`
      <div>
        <div class="form__container">
          <label for="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div class="form__container">
          <label for="url">URL</label>
          <input type="text" id="url"></input>
        </div>
      </div>
    `);
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
}
