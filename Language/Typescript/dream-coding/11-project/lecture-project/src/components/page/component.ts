export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * Encapsulate the HTML element creation
 * element를 만드는 것을 캡슐화 함.
 * 이걸 쓰는 아이들은 element가 어떻게 만들어지는 지 신경쓰지 않고 htmlString만 보내면 알아서 만들어진다.
 */

export class baseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;
  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T; // firstElementChild는 요소노드를 반환한다. firstChild는 요소노드, 텍스트 노드, 주석노드중 하나를 반환한다.
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
