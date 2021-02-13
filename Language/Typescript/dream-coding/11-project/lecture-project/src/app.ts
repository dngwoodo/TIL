import { ImageComponent } from "./components/page/item/image.js";
import { noteComponent } from "./components/page/item/note.js";
import { todoComponent } from "./components/page/item/todo.js";
import { videoComponent } from "./components/page/item/video.js";
import { ItemComponent } from "./components/page/item.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    // image
    const imageWrapper = new ItemComponent();
    imageWrapper.attachTo(document.querySelector(".page")! as HTMLUListElement);
    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(document.querySelector(".item")! as HTMLLIElement);

    // video
    const videoWrapper = new ItemComponent();
    videoWrapper.attachTo(document.querySelector(".page")! as HTMLUListElement);
    const video = new videoComponent(
      "Video Title",
      "https://www.youtube.com/watch?v=nhAR2-WIM-I"
    );
    video.attachTo(document.querySelector(".item")! as HTMLLIElement);

    // note
    const noteWrapper = new ItemComponent();
    noteWrapper.attachTo(document.querySelector(".page")! as HTMLUListElement);
    const note = new noteComponent("Note Title", "Note Content");
    note.attachTo(document.querySelector(".item")! as HTMLLIElement);

    // todo
    const todoWrapper = new ItemComponent();
    todoWrapper.attachTo(document.querySelector(".page")! as HTMLUListElement);
    const todo = new todoComponent("Todo Title", "씻기\n공부하기\n밥먹기");
    todo.attachTo(document.querySelector(".item")! as HTMLLIElement);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
