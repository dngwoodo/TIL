import { baseComponent, Component } from "../page/common/component.js";
import { Composable } from "../page/list/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog
  extends baseComponent<HTMLElement>
  implements Composable {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`
      <dialog class="dialog">
        <div class="dialog__container">
          <button class="close">&times;</button>
          <div id="dialog__body"></div>
          <button class="dialog__submit">ADD</button>
        </div>
      </dialog>
    `);
    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    closeBtn.onclick = () => {
      // 항상 이벤트 리스너는 외부에서 받아오는 것으로 해줘야 된다.
      this.closeListener && this.closeListener();
    };

    const submitBtn = this.element.querySelector(
      ".dialog__submit"
    )! as HTMLElement;
    submitBtn.onclick = () => {
      // 항상 이벤트 리스너는 외부에서 받아오는 것으로 해줘야 된다.
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component) {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attachTo(body);
  }
}
