const board = document.querySelector(".board");
console.log(board);

let gameBoard = [];

const gameBoardObj = () =>{
  for (let i=0; i<9; i++){
    const div = document.createElement("div");
    div.classList.add("square");
    gameBoard.push(div);
    board.appendChild(div);
    console.log("added div");
  }
  removeBorders(board);
  console.log("gameboard holds " + gameBoard);
}

// object constructor for player
function player(name, marker){
  this.name = name
  this.marker = marker
}


// function name allows us to hoist scope
function removeBorders(board){ 
  board.children[0].style.borderTop = "none";
  board.children[1].style.borderTop="none";
  board.children[2].style.borderTop="none";

  board.children[0].style.borderLeft="none";
  board.children[3].style.borderLeft="none";
  board.children[6].style.borderLeft="none";

  board.children[2].style.borderRight="none";
  board.children[5].style.borderRight="none";
  board.children[8].style.borderRight="none";

  board.children[6].style.borderBottom="none";
  board.children[7].style.borderBottom="none";
  board.children[8].style.borderBottom="none";
}

gameBoardObj();
const User = new player('steve','x');
console.log(User.name);
console.log(User.marker);


