const imageButton = document.querySelector(
  ".button--image"
) as HTMLButtonElement;
const videoButton = document.querySelector(
  ".button--video"
) as HTMLButtonElement;
const noteButton = document.querySelector(".button--note") as HTMLButtonElement;
const taskButton = document.querySelector(".button--task") as HTMLButtonElement;
const cards = document.querySelector(".main__cards") as HTMLUListElement;
const modalOveraly = document.querySelector(
  ".modal__overlay"
) as HTMLDivElement;
const modelCancelButton = document.querySelector(
  ".modal .button--cancel"
) as HTMLButtonElement;

const modalForm = document.querySelector(".modal__form") as HTMLFormElement;

// Create
const showModal = () => {
  modalOveraly.classList.remove("hide");
};

const hideModal = () => {
  modalOveraly.classList.add("hide");
};

modelCancelButton.addEventListener("click", () => {
  hideModal();
});

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = (document.querySelector(
    ".modal__title"
  ) as HTMLInputElement).value.trim();
  const url = (document.querySelector(
    ".modal__url"
  ) as HTMLInputElement).value.trim();

  if (title === "") {
    alert("title은 필수입니다.");
  }
  if (url === "") {
    alert("url은 필수입니다.");
  }
  if (url.search(/youtube.com/g)) {
    createVideoCard(title, url);
  } else if (url.search(/youtube.com/g) === -1) {
    createImageCard(title, url);
  }
  hideModal();
});

// 1. Image Button
const createImageCard = (title: string, url: string) => {
  const li = document.createElement("li");
  li.setAttribute("class", "main__card");
  li.innerHTML = `
      <img
        src="${url}"
        alt="image"
      />
      <pre>${title}</pre>
      <button class="button button--cancel">❌</button>
  `;
  cards.appendChild(li);
};

imageButton.addEventListener("click", () => {
  showModal();
});

// 2. Video Button
const createVideoCard = (title: string, url: string) => {
  const li = document.createElement("li");
  li.setAttribute("class", "main__card");
  li.innerHTML = `
      <iframe
        src="${url}"
      ></iframe>
      <pre>${title}</pre>
      <button class="button button--cancel">❌</button>
  `;
  cards.appendChild(li);
};

videoButton.addEventListener("click", () => {
  showModal();
});

// 3. Note Button
const changeModalForm = () => {
  const secondHead = document.querySelector(
    ".modal__form h4:nth-child(3)"
  ) as HTMLHeadElement;
  const url = document.querySelector(".modal__url") as HTMLInputElement;
  const modalAddButton = document.querySelector(
    ".button--add"
  ) as HTMLButtonElement;

  secondHead.textContent = "Body";
  url.remove();

  const textarea = document.createElement("textarea");
  textarea.setAttribute("cols", "30");
  textarea.setAttribute("cols", "10");
  modalForm.insertBefore(textarea, modalAddButton); // 부모노드.insertBefore(삽입할 노드, 기준점 노드);
};

noteButton.addEventListener("click", () => {
  showModal();
  changeModalForm();
});
taskButton.addEventListener("click", () => {});

// delete