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

// 1. Image Button
const hideModal = () => {
  modalOveraly.classList.remove("hide");
};

const showModal = () => {
  modalOveraly.classList.add("hide");
};

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
  hideModal();
});

modelCancelButton.addEventListener("click", () => {
  showModal();
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
  createImageCard(title, url);
  hideModal();
});

videoButton.addEventListener("click", () => {});
noteButton.addEventListener("click", () => {});
taskButton.addEventListener("click", () => {});

// read
// update
// delete
