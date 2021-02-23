import { baseComponent, Component } from "../common/component.js";

// Composable이란 다른 요소들을 함께 조립해서 묶을 수 있는 것
export interface Composable {
  addChild(child: Component): void;
}

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer; // constructor signature, 이제 SectionContainer를 따르는 클래스들은 다 사용 가능
};
export class PageComponent
  extends baseComponent<HTMLUListElement>
  implements Composable {
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class='page'></ul>`);

    this.element.addEventListener("dragover", (event: DragEvent) => {
      this.onDragOver(event);
    });
    this.element.addEventListener("drop", (event: DragEvent) => {
      this.onDrop(event);
    });
  }

  // 드래그를 한 뒤 붕떠 있는 상태일 때 계속 발생된다.
  onDragOver(event: DragEvent) {
    event.preventDefault(); // 이 아이들은 필수로 사용해야 한다. touch event나 pointer event에서 안좋은 상황이 나올 수 있기 때문이다. - MDN
    console.log("onDragOver");
  }

  // 드래그를 드랍했을 때 발생된다.
  onDrop(event: DragEvent) {
    event.preventDefault(); // 이 아이들은 필수로 사용해야 한다. touch event나 pointer event에서 안좋은 상황이 나올 수 있기 때문이다. - MDN
    console.log("onDrop");
  }

  addChild(section: Component) {
    // PageItemComponent가 만약에 darkMode, animation 등 다른 형태의 item이라면 이것은 문제가 된다.
    // 그러므로 의존성 주입을 통해 디커플링하게 만들어줘야 한다.
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element); // 여기서 this.element란 ul을 의미하고 removeFromUl 이라고 생각하자.
    });
  }
}

type OnCloseListener = () => void;

export class PageItemComponent
  extends baseComponent<HTMLUListElement>
  implements SectionContainer {
  private closeListenr?: OnCloseListener;
  constructor() {
    super(`
      <li draggable="true" class="page-item">
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
      this.closeListenr && this.closeListenr();
    }; // parent.removeChild(...);

    this.element.addEventListener("dragstart", (event: DragEvent) => {
      this.onDragStart(event);
    });
    this.element.addEventListener("dragend", (event: DragEvent) => {
      this.onDragEnd(event);
    });
  }
  // 드래그가 시작될 때 실행된다.
  onDragStart(event: DragEvent) {
    console.log("dragstart", event);
  }

  // 드래그가 끝났을 때 실행된다.
  onDragEnd(event: DragEvent) {
    console.log("dragend", event);
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
