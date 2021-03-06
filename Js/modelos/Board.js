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

export { Board };
