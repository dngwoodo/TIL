import { baseComponent } from "../component.js";

export class videoComponent extends baseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <section>
      <iframe class="video"></iframe>
      <h3 class="video__title"></h3>
    </section>
    `);

    const videoElement = this.element.querySelector(
      ".video"
    )! as HTMLIFrameElement;
    videoElement.src = url;

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
