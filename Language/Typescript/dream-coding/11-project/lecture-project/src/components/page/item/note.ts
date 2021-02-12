import { baseComponent } from "../component.js";

export class noteComponent extends baseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(`
      <section>
        <div class="note__holder">
          <h2 class="note__title"></h2>
          <p class="note__content"></p>
        </div>
      </section>
    `);

    const titleElement = this.element.querySelector(
      ".note__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const contentElement = this.element.querySelector(
      ".note__content"
    )! as HTMLParagraphElement;
    contentElement.textContent = content;
  }
}
