import { Board } from "../modelos/Board.js";
import { BoardView } from "../vistas/BoardView.js";
import { Bar } from "../modelos/Bar.js";
import { Ball } from "../modelos/Ball.js";

let board = new Board(800, 400);
let bar = new Bar(780, 100, 20, 100, board);
let bar2 = new Bar(0, 100, 20, 100, board);
//console.log(board);
let canvas = document.getElementById("canvas");
let board_view = new BoardView(canvas, board);
let ball = new Ball(350, 100, 10, board);

document.addEventListener("keydown", (ev) => {
  if (ev.keyCode == 38) {
    ev.preventDefault();
    if (0 !== bar.y) {
      bar.up();
    }
  } else if (ev.keyCode === 40) {
    ev.preventDefault();
    if (300 !== bar.y) {
      bar.down();
    }
  } else if (ev.keyCode === 87) {
    ev.preventDefault();
    if (0 !== bar2.y) {
      bar2.up();
    }
  } else if (ev.keyCode === 83) {
    ev.preventDefault();
    if (300 !== bar2.y) {
      bar2.down();
    }
  } else if (ev.keyCode === 32) {
    ev.preventDefault();
    board.playing = !board.playing;
  }
  console.log(bar2.toString());
});

window.requestAnimationFrame(controller);
function controller() {
  board_view.play();
  window.requestAnimationFrame(controller);
  console.log(ball.x + "y " + ball.y);
}
