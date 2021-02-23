import { ImageComponent } from "./components/page/item/image.js";
import { noteComponent } from "./components/page/item/note.js";
import { todoComponent } from "./components/page/item/todo.js";
import { videoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/list/page.js";
import { Component } from "./components/page/common/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent); // 원래는 이렇게 new를 써서 인스턴스를 만드는 것 보다 의존성 주입을 통해 넣는 것이 좋다.
    this.page.attachTo(appRoot);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    const videoBtn = document.querySelector("#new-video")! as HTMLButtonElement;
    const noteBtn = document.querySelector("#new-note")! as HTMLButtonElement;
    const todoBtn = document.querySelector("#new-todo")! as HTMLButtonElement;

    imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();
      dialog.addChild(inputSection); // dialog안에 inputSection을 추가한다.
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // image
        const image = new ImageComponent(inputSection.title, inputSection.url);
        this.page.addChild(image);
        // image 섹션을 추가해준 다음 다이얼로그창을 없앤다.
        dialog.removeFrom(dialogRoot);
      });
    });
    videoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();
      dialog.addChild(inputSection); // dialog안에 inputSection을 추가한다.
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // video
        const video = new videoComponent(inputSection.title, inputSection.url);
        this.page.addChild(video);
        // video 섹션을 추가해준 다음 다이얼로그창을 없앤다.
        dialog.removeFrom(dialogRoot);
      });
    });

    noteBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();
      dialog.addChild(inputSection); // dialog안에 inputSection을 추가한다.
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // note
        const note = new noteComponent(inputSection.title, inputSection.body);
        this.page.addChild(note);
        // note 섹션을 추가해준 다음 다이얼로그창을 없앤다.
        dialog.removeFrom(dialogRoot);
      });
    });
    todoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();
      dialog.addChild(inputSection); // dialog안에 inputSection을 추가한다.
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // todo
        const todo = new todoComponent(inputSection.title, inputSection.body);
        this.page.addChild(todo);
        // todo 섹션을 추가해준 다음 다이얼로그창을 없앤다.
        dialog.removeFrom(dialogRoot);
      });
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
