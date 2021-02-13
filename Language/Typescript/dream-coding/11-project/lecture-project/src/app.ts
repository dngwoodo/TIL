import { ImageComponent } from "./components/page/item/image.js";
import { noteComponent } from "./components/page/item/note.js";
import { todoComponent } from "./components/page/item/todo.js";
import { videoComponent } from "./components/page/item/video.js";
// import { ItemComponent } from "./components/page/item.js";
import { Composable, PageComponent } from "./components/page/list/page.js";
import { Component } from "./components/page/common/component.js";

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(); // 원래는 이렇게 new를 써서 인스턴스를 만드는 것 보다 의존성 주입을 통해 넣는 것이 좋다.
    this.page.attachTo(appRoot);

    // image
    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(image);

    // video
    const video = new videoComponent(
      "Video Title",
      "https://www.youtube.com/watch?v=nhAR2-WIM-I"
    );
    this.page.addChild(video);

    // note
    const note = new noteComponent("Note Title", "Note Content");
    this.page.addChild(note);

    // todo
    const todo = new todoComponent("Todo Title", "씻기\n공부하기\n밥먹기");
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
