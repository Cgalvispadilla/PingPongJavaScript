import { draw, hit } from "../helpers/helpers.js";
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
  check_collisions() {
    for (let i = this.board.bars.length - 1; i >= 0; i--) {
      let bar = this.board.bars[i];
      if (hit(bar, this.board.ball)) {
        this.board.ball.collisions(bar);
      } else {
        this.board.ball.collision2();
      }
    }
  }
  play() {
    if (this.board.playing) {
      this.clean();
      this.draw();
      this.check_collisions();
      this.board.ball.move();
    }
  }
}
export { BoardView };
