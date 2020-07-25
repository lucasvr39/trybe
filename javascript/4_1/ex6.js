
let chessPiece = "Queen";
let lowerCase = chessPiece.toLowerCase();

switch (lowerCase) {
  case "pawn":
    console.log("moves forward only");
    break;
  case "rook":
    console.log("moves in a straight line either horizontally or vertically through any number of unoccupied squares");
    break;
  case "knight":
    console.log("moves two squares horizontally or vertically and then one more square at a right-angle");
    break;
  case "bishop":
    console.log("moves in a straight line diagonally on the board");
    break;
  case "queen":
    console.log("move any number of squares in a straight line - either vertically, horizontally or diagonally");
    break;
  case "king":
    console.log("move one square in any direction: horizontally, vertically, or diagonally");
    break;
  default:
    console.log("invalid piece!");
}