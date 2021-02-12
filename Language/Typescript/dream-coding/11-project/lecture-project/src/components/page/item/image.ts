export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    // 사용자에게 받은 데이터로 html을 동적으로 만들게 되면 위험하다.
    // XSS(Cross Site Scripting) attack 보안 문제가 있기 때문이다. script를 포함한 텍스트를 입력해서 공격할 수 있다.
    // ${}를 활용하지 않고 querySelector를 활용하여 넣는 것이 좋다.
    template.innerHTML = `
      <section class="image">
        <div class="image__holder">
          <img class="image__thumbnail" />
          <p class="image__title"></p>
        </div>
      </section>
    `;

    // template.content는 <section></section> 이다.
    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
