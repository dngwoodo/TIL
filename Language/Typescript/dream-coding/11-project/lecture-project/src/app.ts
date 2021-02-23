import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/list/page.js";
import { Component } from "./components/page/common/component.js";
import {
  InputDialog,
  MediaData,
  TextData,
} from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";

// 디커플링을 위해 클래스를 넣지말고 최대한 규격사항(인터페이스)만 넣어주는 것이 좋다.
type InputComponentConstructor<T extends (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent); // 원래는 이렇게 new를 써서 인스턴스를 만드는 것 보다 의존성 주입을 통해 넣는 것이 좋다.
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url) // input안에 있는 title, url을 받기 위해 함수로 작성
    );

    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-todo",
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );
  }

  // 내부에서만 사용
  // 변수명은 element를 dialog에 연결해준다라는 의미
  private bindElementToDialog<T extends (MediaData | TextData) & Component>( // 디커플링을 위해 클래스를 넣지말고 최대한 규격사항(인터페이스)만 넣어주는 것이 좋다.
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component // Component는 ImageComponent, VideoComponent... 등을 의미한다.
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;

    element.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input); // dialog안에 inputSection을 추가한다.
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // image
        const image = makeSection(input); // input은 MediaSectionInput | TextSectionInput 둘중에 하나를 의미
        this.page.addChild(image); // 페이지에 Component를 추가한다.
        // image 섹션을 추가해준 다음 다이얼로그창을 없앤다.
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
