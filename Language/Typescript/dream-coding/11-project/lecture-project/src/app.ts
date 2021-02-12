import { ImageComponent } from "./components/page/item/image.js";
import { noteComponent } from "./components/page/item/note.js";
import { todoComponent } from "./components/page/item/todo.js";
import { videoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");

    const video = new videoComponent(
      "Video Title",
      "https://www.youtube.com/embed/nhAR2-WIM-I"
    );
    video.attachTo(appRoot, "beforeend");

    const note = new noteComponent("Note Title", "Note Content");
    note.attachTo(appRoot, "beforeend");

    const todo = new todoComponent("Todo Title", "씻기\n공부하기\n밥먹기");
    todo.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
