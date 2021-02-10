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
var modalForm = document.querySelector(".modal__form");
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
    hideModal(urlModalOveraly);
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
noteButton.addEventListener("click", function () {
    showModal(bodyModalOveraly);
});
taskButton.addEventListener("click", function () { });
// delete
