import { baseComponent } from "../component.js";

export class todoComponent extends baseComponent<HTMLElement> {
  constructor(title: string, todos: string) {
    super(`
      <section>
        <h2 class="todo__title"></h2>s
        <ul class="todo__list"></ul>
      </section>
    `);

    const titleElement = this.element.querySelector(
      ".todo__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const listElement = this.element.querySelector(
      ".todo__list"
    )! as HTMLUListElement;
    todos.split("\n").forEach((todo) => {
      const li = document.createElement("li");
      li.setAttribute("class", "todo__item");
      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      const label = document.createElement("label");
      label.textContent = todo;

      li.appendChild(input);
      li.appendChild(label);
      listElement.appendChild(li);
    });
  }
}
