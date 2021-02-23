import { baseComponent, Component } from "../common/component.js";

// Composable이란 다른 요소들을 함께 조립해서 묶을 수 있는 것
export interface Composable {
  addChild(child: Component): void;
}

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
  setOnDragStateListener(listener: OnDragStateListener<SectionContainer>): void;
  muteChildren(state: "mute" | "unmute"): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer; // constructor signature, 이제 SectionContainer를 따르는 클래스들은 다 사용 가능
};
export class PageComponent
  extends baseComponent<HTMLUListElement>
  implements Composable {
  private children = new Set<SectionContainer>();
  private dropTarget?: SectionContainer;
  private dragTarget?: SectionContainer;
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
    // 여기에서 컴포넌트 위치를 바꿔주는 로직이 들어간다.
    if (!this.dropTarget) {
      return;
    }
    if (this.dragTarget && this.dragTarget !== this.dropTarget) {
      this.dragTarget.removeFrom(this.element);
      this.dropTarget.attach(this.dragTarget, "beforebegin");
    }
  }

  addChild(section: Component) {
    // PageItemComponent가 만약에 darkMode, animation 등 다른 형태의 item이라면 이것은 문제가 된다.
    // 그러므로 의존성 주입을 통해 디커플링하게 만들어줘야 한다.
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element); // 여기서 this.element란 ul을 의미하고 removeFromUl 이라고 생각하자.
      this.children.delete(item);
    });
    this.children.add(item);
    item.setOnDragStateListener(
      (target: SectionContainer, state: DragState) => {
        switch (state) {
          case "start":
            this.dragTarget = target;
            this.updateSections("mute");
            break;
          case "stop":
            this.dragTarget = undefined;
            this.updateSections("unmute");
            break;
          case "enter":
            this.dropTarget = target;
            break;
          case "leave":
            this.dropTarget = undefined;
            break;
          default:
            throw Error("unsupported state: ${state}");
        }
      }
    );
  }

  private updateSections(state: "mute" | "unmute") {
    this.children.forEach((section: SectionContainer) => {
      section.muteChildren(state);
    });
  }
}

type OnCloseListener = () => void;
type DragState = "start" | "stop" | "enter" | "leave";
type OnDragStateListener<T extends Component> = (
  target: T,
  state: DragState
) => void;

export class PageItemComponent
  extends baseComponent<HTMLUListElement>
  implements SectionContainer {
  private closeListener?: OnCloseListener;
  private dragStateListener?: OnDragStateListener<PageItemComponent>;
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
      this.closeListener && this.closeListener();
    }; // parent.removeChild(...);

    this.element.addEventListener("dragstart", (event: DragEvent) => {
      this.onDragStart(event);
    });
    this.element.addEventListener("dragend", (event: DragEvent) => {
      this.onDragEnd(event);
    });
    this.element.addEventListener("dragenter", (event: DragEvent) => {
      this.onDragEnter(event);
    });
    this.element.addEventListener("dragleave", (event: DragEvent) => {
      this.onDragLeave(event);
    });
  }
  // 드래그가 시작될 때 실행된다.
  onDragStart(_: DragEvent) {
    this.notifyDragObservers("start"); // 나를 관찰하는 아이에게 알려주기 위해 사용
  }
  // 드래그가 끝났을 때 실행된다.
  onDragEnd(_: DragEvent) {
    this.notifyDragObservers("stop"); // 나를 관찰하는 아이에게 알려주기 위해 사용
  }
  // 드래그가 들어올 때 실행된다. 즉 드래그 되고 있는 컴포넌트가 내 위에 있다면 실행
  onDragEnter(_: DragEvent) {
    this.notifyDragObservers("enter"); // 나를 관찰하는 아이에게 알려주기 위해 사용
  }
  // 드래그가 나갈 때 실행된다. 즉 드래그 되고 있는 컴포넌트가 내 위에서 벗어났을때 실행
  onDragLeave(_: DragEvent) {
    this.notifyDragObservers("leave"); // 나를 관찰하는 아이에게 알려주기 위해 사용
  }

  // 변경사항을 한곳에서만 하기 위해서 함수로 만듬
  notifyDragObservers(state: DragState) {
    this.dragStateListener && this.dragStateListener(this, state);
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  // 드래그 발생 시 마다 호출되는 함수
  setOnDragStateListener(listener: OnDragStateListener<PageItemComponent>) {
    this.dragStateListener = listener;
  }

  muteChildren(state: "mute" | "unmute") {
    if (state === "mute") {
      this.element.classList.add("mute-children");
    } else {
      this.element.classList.remove("mute-children");
    }
  }
}
