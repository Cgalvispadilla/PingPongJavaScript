import { Board } from "../modelos/Board.js";
import { BoardView } from "../vistas/BoardView.js";
import { Bar } from "../modelos/Bar.js";

window.addEventListener("load", main);

function main() {
  let board = new Board(800, 400);
  let bar = new Bar(20, 100, 40, 100, board);
  let bar2 = new Bar(735, 100, 40, 100, board);
  console.log(board);
  let canvas = document.getElementById("canvas");
  let board_view = new BoardView(canvas, board);
  board_view.draw();
}
