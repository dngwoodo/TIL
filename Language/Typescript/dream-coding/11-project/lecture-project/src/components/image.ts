export class ImageComponent {
  private element: HTMLLIElement;
  private image: HTMLImageElement;
  constructor(private url: string) {
    this.element = document.createElement("li");
    this.image = new Image();
    this.image.src = this.url;
    this.element.appendChild(this.image);
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin"): void {
    parent.insertAdjacentElement(position, this.element);
  }
}
