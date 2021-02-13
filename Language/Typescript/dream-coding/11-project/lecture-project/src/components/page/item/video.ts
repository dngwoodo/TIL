import { baseComponent } from "../common/component.js";

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

    videoElement.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // private parseQueryString(url: string): string {
  //   // 직접 만든 함수
  //   const query = url.split("?")[1];
  //   if (!query) return url;

  //   const parsingUrl: any = query.split("&").reduce((acc, e) => {
  //     const [key, value] = e.split("=");
  //     return { ...acc, [key as string]: value };
  //   }, {});

  //   return `https://www.youtube.com/embed/${parsingUrl.v}`;
  // }

  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(match);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
