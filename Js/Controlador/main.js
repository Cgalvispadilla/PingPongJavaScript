import { Board, BoardView } from "../modelos/Pizarron.js";

window.addEventListener("load", main);

function main() {
  let board = new Board(800, 400);
  console.log(board);
  let canvas = document.getElementById("canvas");
  let board_view = new BoardView(canvas, board);
}
