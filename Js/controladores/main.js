import { Board } from "../modelos/Board.js";
import { BoardView } from "../vistas/BoardView.js";
import { Bar } from "../modelos/Bar.js";
import { Ball } from "../modelos/Ball.js";

var i;
//const d_facil = document.dificultad.i_dificultad[1].checked;

let board = new Board(800, 400);
var bar = new Bar(780, 100, 20, 100, board);
var bar2 = new Bar(0, 100, 20, 100, board);
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
    if (400 - bar.height !== bar.y) {
      bar.down();
    }
  } else if (ev.keyCode === 87) {
    ev.preventDefault();
    if (0 !== bar2.y) {
      bar2.up();
    }
  } else if (ev.keyCode === 83) {
    ev.preventDefault();
    if (400 - bar.height !== bar2.y) {
      bar2.down();
    }
  } else if (ev.keyCode === 32) {
    ev.preventDefault();
    board.playing = !board.playing;
    if (document.dificultad.i_dificultad[2].checked) {
      bar.height = 40;
      bar2.height = 40;
    } else if (document.dificultad.i_dificultad[1].checked) {
      bar.height = 70;
      bar2.height = 70;
    } else if (document.dificultad.i_dificultad[0].checked) {
      bar.height = 100;
      bar2.height = 100;
    }
  }
});

window.requestAnimationFrame(controller);
function controller() {
  board_view.play();
  window.requestAnimationFrame(controller);
  //console.log(ball.x + "y " + ball.y);
}
