import { draw } from "../helpers/draw.js";
class BoardView {
  constructor(canvas, board) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.cxt = canvas.getContext("2d");
  }
  clean() {
    this.cxt.clearRect(0, 0, this.board.width, this.board.height);
  }
  draw() {
    for (var i = this.board.elements.length - 1; i >= 0; i--) {
      var el = this.board.elements[i];
      draw(this.cxt, el);
    }
  }
  play() {
    this.clean();
    this.draw();
  }
}
export { BoardView };
