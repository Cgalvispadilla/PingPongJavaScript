/*(function () {
  self.Board = function (width, height) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game_over = false;
    this.bars = [];
    this.ball = null;
    this.playing = false;
  };

  self.Board.prototype = {
    // metodo que retorna las barras y las pelotas que estan dentro del tablero
    get elements() {
      var elements = this.bars.map(function (bar) {
        return bar;
      });
      elements.push(this.ball);
      return elements;
    },
  };
})();*/
class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game_over = false;
    this.bars = [];
    this.ball = null;
    this.playing = false;
  }

  // metodo que retorna las barras y las pelotas que estan dentro del tablero
  get elements() {
    var elements = this.bars.map(function (bar) {
      return bar;
    });
    elements.push(this.ball);
    return elements;
  }
}

class BoardView {
  constructor(canvas, board) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.cxt = canvas.getContext("2d");
  }
}

export { Board, BoardView };
