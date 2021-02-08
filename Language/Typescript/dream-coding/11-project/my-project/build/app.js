"use strict";
var imageButton = document.querySelector(".button--image");
var videoButton = document.querySelector(".button--video");
var noteButton = document.querySelector(".button--note");
var taskButton = document.querySelector(".button--task");
var cards = document.querySelector(".main__cards");
var modalOveraly = document.querySelector(".modal__overlay");
var modelCancelButton = document.querySelector(".modal .button--cancel");
var modalForm = document.querySelector(".modal__form");
// Create
var showModal = function () {
    modalOveraly.classList.remove("hide");
};
var hideModal = function () {
    modalOveraly.classList.add("hide");
};
modelCancelButton.addEventListener("click", function () {
    hideModal();
});
modalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var title = document.querySelector(".modal__title").value.trim();
    var url = document.querySelector(".modal__url").value.trim();
    if (title === "") {
        alert("title은 필수입니다.");
    }
    if (url === "") {
        alert("url은 필수입니다.");
    }
    if (url.search(/youtube.com/g)) {
        createVideoCard(title, url);
    }
    else if (url.search(/youtube.com/g) === -1) {
        createImageCard(title, url);
    }
    hideModal();
});
// 1. Image Button
var createImageCard = function (title, url) {
    var li = document.createElement("li");
    li.setAttribute("class", "main__card");
    li.innerHTML = "\n      <img\n        src=\"" + url + "\"\n        alt=\"image\"\n      />\n      <pre>" + title + "</pre>\n      <button class=\"button button--cancel\">\u274C</button>\n  ";
    cards.appendChild(li);
};
imageButton.addEventListener("click", function () {
    showModal();
});
// 2. Video Button
var createVideoCard = function (title, url) {
    var li = document.createElement("li");
    li.setAttribute("class", "main__card");
    li.innerHTML = "\n      <iframe\n        src=\"" + url + "\"\n      ></iframe>\n      <pre>" + title + "</pre>\n      <button class=\"button button--cancel\">\u274C</button>\n  ";
    cards.appendChild(li);
};
videoButton.addEventListener("click", function () {
    showModal();
});
// 3. Note Button
var changeModalForm = function () {
    var secondHead = document.querySelector(".modal__form h4:nth-child(3)");
    var url = document.querySelector(".modal__url");
    var modalAddButton = document.querySelector(".button--add");
    secondHead.textContent = "Body";
    url.remove();
    var textarea = document.createElement("textarea");
    textarea.setAttribute("cols", "30");
    textarea.setAttribute("cols", "10");
    modalForm.insertBefore(textarea, modalAddButton); // 부모노드.insertBefore(삽입할 노드, 기준점 노드);
};
noteButton.addEventListener("click", function () {
    showModal();
    changeModalForm();
});
taskButton.addEventListener("click", function () { });
// delete
