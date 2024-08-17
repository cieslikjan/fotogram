"use strict";

let fileNames = [
  "bird-8936789_1280.jpg",
  "dog-8946829_1280.jpg",
  "girl-8880144_1280.png",
  "gold-7980065_1280.jpg",
  "lion-8947711_1280.jpg",
  "old-8235289_1280.jpg",
  "penguin-8875750_1280.jpg",
  "puppy-8510899_1280.jpg",
  "seagull-8512995_1280.jpg",
  "stars-8908843_1280.jpg",
  "stream-8482939_1280.jpg",
  "truck-8497705_1280.jpg",
  "waves-8585265_1280.jpg",
];

function render() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML += ` <h1>Your personal photo album</h1>
                            <div class='image-container'>
                                ${renderImages()}
                            </div>`;
}

function renderImages() {
  let imageRefs = "";
  for (let i = 0; i < fileNames.length; i++) {
    imageRefs += `<img onclick="renderDialog('${i}')" src="./img/${fileNames[i]}"></img>`;
  }
  return imageRefs;
}

function renderDialog(index) {
  let dialogRef = document.getElementById("dialog");
  let fileName = fileNames[index];
  dialogRef.innerHTML = renderDialogImage(fileName, index);

  
  dialogRef.classList.remove("d-none");
}

function renderDialogImage(fileName, index) {
  let displayableIndex = Number(index) + 1;
  return `<div class="dialog-container" onclick="event.stopPropagation();">
            <div class="dialog-header">
                <h4>${fileName.slice(0, fileName.length - 4)}</h4>
                <img onclick="closeDialog(event)" src="./img/close-button.png"></img>
            </div>
            <img class="dialog-image" src="./img/${fileName}"></img>
            <div class="dialog-footer">
                <button onclick="getPreviousImage(${index}, event)"><</button>
                <span>${displayableIndex} / ${fileNames.length}</span>
                <button onclick="getNextImage(${index},event)">></button>
            </div>
        </div>`;
}

function getNextImage(index) {
  index = Number(index);
  index >= fileNames.length - 1 ? (index = 0) : index++;


  renderDialog(index);
}

function getPreviousImage(index) {
  index = Number(index);
  index <= 0 ? (index = 12) : index--;

  renderDialog(index);
}

function closeDialog() {
  document.getElementById("dialog").classList.add("d-none");
}
