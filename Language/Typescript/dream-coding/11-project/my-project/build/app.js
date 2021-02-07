"use strict";
var imageButton = document.querySelector(".button--image");
var videoButton = document.querySelector(".button--video");
var noteButton = document.querySelector(".button--note");
var taskButton = document.querySelector(".button--task");
var cards = document.querySelector(".main__cards");
// create
imageButton.addEventListener("click", function () {
    var li = document.createElement("li");
    // 400px 이하일때 https://picsum.photos/400/300
    // 400 ~ 700px일때 https://picsum.photos/700/300
    // 701px ~ 일때
    li.innerHTML = "\n    <li class=\"main__card\">\n      <img\n        srcset=\"https://picsum.photos/400/300 400w,\n                https://picsum.photos/700/300 700w\"\n        src=\"https://picsum.photos/1000/300\"\n        alt=\"image\"\n      />\n      <pre>Image Card</pre>\n      <button>\u274C</button>\n    </li>\n  ";
    cards.appendChild(li);
});
videoButton.addEventListener("click", function () { });
noteButton.addEventListener("click", function () { });
taskButton.addEventListener("click", function () { });
// read
// update
// delete
