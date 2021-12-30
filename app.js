const board = document.querySelector(".board");
const xButton = document.querySelector(".xbutton");
const oButton = document.querySelector(".obutton");
const submit = document.getElementById('submitButton');
const whosTurn = document.querySelector(".whosTurn");
const square = document.querySelector(".board");


let userName = ''; // gets filled with the userName form
let userSelection =''; //either X or O

xButton.addEventListener("click", function(){
  userSelection = 'X';
  redBorder('X');
});

oButton.addEventListener("click", function(){
  userSelection = 'O';
  redBorder('O'); //tell redBorder to have red border for 1 second
});

//* --- When user hits submit button---- * //
submit.addEventListener("click", submitForm);
function submitForm(event) {
  event.preventDefault();
  userName = document.getElementById('fullName').value; //store userInput as userName
  console.log("submit.value is    " + userName);
  console.log(whosTurn);
  whosTurn.textContent = "Who's turn? "+  `${userName}`;
  document.getElementById("userName").reset();  //clear the form
}


console.log(board);

//if mouse goes over square, draw an X 
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square","squarewithX");
});
square.addEventListener("mouseout", function(event) {
  event.target.classList.replace("squarewithX","square");
});

const gameBoardObj = () =>{
  let gameBoard = [];
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
// player constructor
function createPlayer(name, marker){
  this.name = name
  this.marker = marker

  return{
    name,
    marker
  }
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
//function to toggle red border for 1 second for X and O buttons
function redBorder(str){
  if (str === 'X') {
    xButton.style.border="5px solid red";
    setTimeout(function(){
      xButton.style.border = "1px solid black";
    },500);
  }

  if(str ==='O') {
    oButton.style.border="5px solid red";
    setTimeout(function(){
      oButton.style.border = "1px solid black";
    },500);
  }  
  return;
}
//actual instructions
gameBoardObj();
const User = createPlayer('steve','x');
console.log(User);
//console.log(User.marker);


//pseudocode
//user selects X or O, button lights up around selection
// if X, mouse hovers over square, put a grey  temporarily (not permenant)
//same with O, mouse over, put grey O.
//if mouse clicks, place O or X


