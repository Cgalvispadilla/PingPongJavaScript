import { Board } from "../modelos/Board.js";
import { BoardView } from "../vistas/BoardView.js";
import { Bar } from "../modelos/Bar.js";
import { Ball } from "../modelos/Ball.js";

let board = new Board(800, 400);
let bar = new Bar(20, 100, 40, 100, board);
let bar2 = new Bar(735, 100, 40, 100, board);
console.log(board);
let canvas = document.getElementById("canvas");
let board_view = new BoardView(canvas, board);
let ball = new Ball(350, 100, 10, board);

document.addEventListener("keydown", (ev) => {
  ev.preventDefault();
  if (ev.keyCode == 38) {
    bar.up();
  } else if (ev.keyCode == 40) {
    bar.down();
  } else if (ev.keyCode == 87) {
    bar2.up();
  } else if (ev.keyCode == 83) {
    bar2.down();
  }
  console.log(bar2.toString());
});

window.requestAnimationFrame(controller);

function controller() {
  board_view.clean();
  board_view.draw();
  window.requestAnimationFrame(controller);
}
