let drawbox = document.querySelector("#drawbox");
let div_row;
let div;

let size_button = document.querySelector("#size_button");
size_button.addEventListener("click", changeSize);


function createGrid(size) {
  for (let i = 0; i < size; i++) {
    div_row = document.createElement("div");
    div_row.classList.add("div_row");

    for (let j = 0; j < size; j++) {
      div = document.createElement("div");

      div.classList.add("box");

      div.addEventListener("mouseover", paintSquare);
      div_row.appendChild(div);
    }

    drawbox.appendChild(div_row);
  }
}

function changeSize() {
  let new_size = prompt("How many squares per side?");

  while (drawbox.firstChild) {
    drawbox.removeChild(drawbox.lastChild);
  }

  createGrid(new_size);
}

function paintSquare() {
  this.style.backgroundColor = getRandomColor();
}

/* from github */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}