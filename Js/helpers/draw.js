function draw(cxt, element) {
  if (element !== null && element.hasOwnProperty("kind")) {
    switch (element.kind) {
      case "rectangle":
        cxt.fillRect(element.x, element.y, element.width, element.height);
        break;

      case "circle":
        cxt.beginPath();
        cxt.arc(element.x, element.y, element.radius, 0, 7);
        cxt.fill();
        cxt.closePath();
        break;
    }
  }
}
export { draw };
