"use strict";
var imageButton = document.querySelector(".button--image");
var videoButton = document.querySelector(".button--video");
var noteButton = document.querySelector(".button--note");
var taskButton = document.querySelector(".button--task");
var cards = document.querySelector(".main__cards");
var urlModalOveraly = document.querySelector(".modal__overlay--url");
var bodyModalOveraly = document.querySelector(".modal__overlay--body");
var urlModalCancelButton = document.querySelector(".modal__overlay--url .button--cancel");
var bodyModalCancelButton = document.querySelector(".modal__overlay--body .button--cancel");
var urlModalForm = document.querySelector(".modal__overlay--url .modal__form");
var bodyModalForm = document.querySelector(".modal__overlay--body .modal__form");
// Create
var showModal = function (modal) {
    modal.classList.remove("hide");
};
var hideModal = function (modal) {
    modal.classList.add("hide");
};
urlModalCancelButton.addEventListener("click", function () {
    hideModal(urlModalOveraly);
});
bodyModalCancelButton.addEventListener("click", function () {
    hideModal(bodyModalOveraly);
});
urlModalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var title = document.querySelector(".modal__title").value.trim();
    var url = document.querySelector(".modal__url").value.trim();
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
    }
    else if (url.search(/youtube.com/g) === -1) {
        createImageCard(title, url);
    }
    hideModal(urlModalOveraly);
});
bodyModalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var title = document.querySelector(".modal__overlay--body .modal__title").value.trim();
    var body = document.querySelector(".modal__overlay--body .modal__body").value.trim();
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
var createImageCard = function (title, url) {
    var li = document.createElement("li");
    li.setAttribute("class", "main__card");
    li.innerHTML = "\n      <img\n        src=\"" + url + "\"\n        alt=\"image\"\n      />\n      <pre>" + title + "</pre>\n      <button class=\"button button--cancel\">\u274C</button>\n  ";
    cards.appendChild(li);
};
imageButton.addEventListener("click", function () {
    showModal(urlModalOveraly);
});
// 2. Video Button
var createVideoCard = function (title, url) {
    var li = document.createElement("li");
    li.setAttribute("class", "main__card");
    li.innerHTML = "\n      <iframe\n        src=\"" + url + "\"\n      ></iframe>\n      <pre>" + title + "</pre>\n      <button class=\"button button--cancel\">\u274C</button>\n  ";
    cards.appendChild(li);
};
videoButton.addEventListener("click", function () {
    showModal(urlModalOveraly);
});
// 3. Note Button
var createNoteCard = function (title, body) {
    var li = document.createElement("li");
    li.setAttribute("class", "main__card main__card--note");
    li.innerHTML = "\n      <strong class=\"main__title\">" + title + "</strong>\n      <pre class=\"main__body\">" + body + "</pre>\n      <button class=\"button button--cancel\">\u274C</button>\n  ";
    cards.appendChild(li);
};
noteButton.addEventListener("click", function () {
    showModal(bodyModalOveraly);
});
// 4. Task Button
taskButton.addEventListener("click", function () {
    showModal(bodyModalOveraly);
});
// Delete
cards.addEventListener("click", function (e) {
    var target = e.target;
    if (target.tagName !== "BUTTON")
        return;
    cards.removeChild(target.parentNode);
});
