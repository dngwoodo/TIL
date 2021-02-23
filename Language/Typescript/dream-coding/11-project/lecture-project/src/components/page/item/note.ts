import { baseComponent } from "../common/component.js";

export class NoteComponent extends baseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`
      <section>
        <h2 class="page-item__title note__title"></h2>
        <p class="note__body"></p>
      </section>
    `);

    const titleElement = this.element.querySelector(
      ".note__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(
      ".note__body"
    )! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
