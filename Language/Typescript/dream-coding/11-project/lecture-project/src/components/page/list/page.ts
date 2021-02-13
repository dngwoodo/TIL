import { baseComponent, Component } from "../common/component.js";

// Composable이란 다른 요소들을 함께 조립해서 묶을 수 있는 것
export interface Composable {
  addChild(child: Component): void;
}

export class PageComponent
  extends baseComponent<HTMLUListElement>
  implements Composable {
  constructor() {
    super(`<ul class='page'></ul>`);
  }

  addChild(section: Component) {
    // PageItemComponent가 만약에 darkMode, animation 등 다른 형태의 item이라면 이것은 문제가 된다.
    // 그러므로 의존성 주입을 통해 디커플링하게 만들어줘야 한다.
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}

type OnCloseListener = () => void;

export class PageItemComponent
  extends baseComponent<HTMLUListElement>
  implements Composable {
  private closeListenr?: OnCloseListener;
  constructor() {
    super(`
      <li class="page-item">
        <section class="page-item__body"></section>
        <div class="page-item__controls">
          <button class="close">&times;</button>
        </div>
      </li>
    `);

    const closeButton = this.element.querySelector(
      ".close"
    )! as HTMLButtonElement;
    // PageItemComponent는 어디에 자신이 속해 있는지 모르기 때문에 함수를 받아서 사용한다.
    closeButton.onclick = () => {
      this.closeListenr && this.closeListenr(); // parent.removeChild(...);
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListenr = listener;
  }
}
