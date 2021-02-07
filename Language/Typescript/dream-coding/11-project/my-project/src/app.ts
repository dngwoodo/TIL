const imageButton = document.querySelector(
  ".button--image"
) as HTMLButtonElement;
const videoButton = document.querySelector(
  ".button--video"
) as HTMLButtonElement;
const noteButton = document.querySelector(".button--note") as HTMLButtonElement;
const taskButton = document.querySelector(".button--task") as HTMLButtonElement;
const cards = document.querySelector(".main__cards") as HTMLUListElement;

// create
imageButton.addEventListener("click", () => {
  const li = document.createElement("li");
  // 400px 이하일때 https://picsum.photos/400/300
  // 400 ~ 700px일때 https://picsum.photos/700/300
  // 701px ~ 일때
  li.innerHTML = `
    <li class="main__card">
      <img
        srcset="https://picsum.photos/400/300 400w,
                https://picsum.photos/700/300 700w"
        src="https://picsum.photos/1000/300"
        alt="image"
      />
      <pre>Image Card</pre>
      <button>❌</button>
    </li>
  `;
  cards.appendChild(li);
});
videoButton.addEventListener("click", () => {});
noteButton.addEventListener("click", () => {});
taskButton.addEventListener("click", () => {});

// read
// update
// delete
