const imageButton = document.querySelector(
  ".button--image"
) as HTMLButtonElement;
const videoButton = document.querySelector(
  ".button--video"
) as HTMLButtonElement;
const noteButton = document.querySelector(".button--note") as HTMLButtonElement;
const taskButton = document.querySelector(".button--task") as HTMLButtonElement;
const cards = document.querySelector(".main__cards") as HTMLUListElement;
const urlModalOveraly = document.querySelector(
  ".modal__overlay--url"
) as HTMLDivElement;
const bodyModalOveraly = document.querySelector(
  ".modal__overlay--body"
) as HTMLDivElement;
const urlModalCancelButton = document.querySelector(
  ".modal__overlay--url .button--cancel"
) as HTMLButtonElement;
const bodyModalCancelButton = document.querySelector(
  ".modal__overlay--body .button--cancel"
) as HTMLButtonElement;
const urlModalForm = document.querySelector(
  ".modal__overlay--url .modal__form"
) as HTMLFormElement;
const bodyModalForm = document.querySelector(
  ".modal__overlay--body .modal__form"
) as HTMLFormElement;

// Create
const showModal = (modal: HTMLDivElement) => {
  modal.classList.remove("hide");
};

const hideModal = (modal: HTMLDivElement) => {
  modal.classList.add("hide");
};

urlModalCancelButton.addEventListener("click", function () {
  hideModal(urlModalOveraly);
});

bodyModalCancelButton.addEventListener("click", function () {
  hideModal(bodyModalOveraly);
});

urlModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = (document.querySelector(
    ".modal__title"
  ) as HTMLInputElement).value.trim();
  const url = (document.querySelector(
    ".modal__url"
  ) as HTMLInputElement).value.trim();

  if (title === "") {
    alert("title은 필수입니다.");
    return;
  }

  if (url === "") {
    alert("url은 필수입니다.");
    return;
  }

  if (url.search(/youtube.com/g)) {
    createVideoCard(title, url);
  } else if (url.search(/youtube.com/g) === -1) {
    createImageCard(title, url);
  }
  hideModal(urlModalOveraly);
});

bodyModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = (document.querySelector(
    ".modal__overlay--body .modal__title"
  ) as HTMLInputElement).value.trim();
  const body = (document.querySelector(
    ".modal__overlay--body .modal__body"
  ) as HTMLInputElement).value.trim();

  if (title === "") {
    alert("title은 필수입니다.");
    return;
  }

  if (body === "") {
    alert("body는 필수입니다.");
    return;
  }

  createNoteCard(title, body);

  hideModal(bodyModalOveraly);
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
  showModal(urlModalOveraly);
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
  showModal(urlModalOveraly);
});

// 3. Note Button
const createNoteCard = (title: string, body: string) => {
  const li = document.createElement("li");
  li.setAttribute("class", "main__card main__card--note");
  li.innerHTML = `
      <strong class="main__title">${title}</strong>
      <pre class="main__body">${body}</pre>
      <button class="button button--cancel">❌</button>
  `;
  cards.appendChild(li);
};

noteButton.addEventListener("click", () => {
  showModal(bodyModalOveraly);
});

taskButton.addEventListener("click", () => {});

// delete
