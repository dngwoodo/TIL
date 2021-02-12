import { baseComponent } from "../component.js";

export class videoComponent extends baseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <section>
      <div class="video__holder">
        <iframe class="video"></iframe>
        <p class="video__title"></p>
      </div>
    </section>
    `);

    const videoElement = this.element.querySelector(
      ".video"
    )! as HTMLIFrameElement;
    videoElement.src = url;

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
