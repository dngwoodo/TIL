import { baseComponent } from "../common/component.js";

export class TodoComponent extends baseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`
      <section>
        <h2 class="page-item__title todo__title"></h2>  
        <input type="checkbox" id="todo-checkbox"/>
        <label for="todo-checkbox" class="todo-label"></label>
      </section>
    `);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector(
      ".todo-label"
    )! as HTMLLabelElement;
    todoElement.textContent = todo;
  }
}
