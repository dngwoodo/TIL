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

    const parsingUrl = this.parseQueryString(url).v
      ? `https://www.youtube.com/embed/${this.parseQueryString(url).v}`
      : url;
    videoElement.src = parsingUrl;

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private parseQueryString(url: string): any {
    const query = url.split("?")[1];
    if (!query) return {};
    return query.split("&").reduce((acc, e) => {
      const [key, value] = e.split("=");
      return { ...acc, [key as string]: value };
    }, {});
  }
}
