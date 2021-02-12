export class baseComponent {
  constructor(protected readonly element: HTMLElement) {}
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
