import { Board } from "../modelos/Board.js";
import { BoardView } from "../vistas/BoardView.js";

window.addEventListener("load", main);

function main() {
  let board = new Board(800, 400);
  console.log(board);
  let canvas = document.getElementById("canvas");
  let board_view = new BoardView(canvas, board);
}
