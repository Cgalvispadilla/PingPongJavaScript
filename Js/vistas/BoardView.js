import { draw } from "../helpers/draw.js";
class BoardView {
  constructor(canvas, board) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.cxt = canvas.getContext("2d");
  }

  draw() {
    for (var i = this.board.elements.length - 1; i >= 0; i--) {
      var el = this.board.elements[i];

      draw(this.cxt, el);
    }
  }
}
export { BoardView };
