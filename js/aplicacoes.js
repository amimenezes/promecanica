/*
 * @name Translate
 * @description The translate() function allows objects to be
 * moved to any location within the window. The first parameter
 * sets the x-axis offset and the second parameter sets the
 * y-axis offset. This example shows how transforms accumulate.
 */

let x = 0;
let dim = 80.0;
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

let bg;
function setup() {
  bg = loadImage('img/trocador_ar_oleo.jpg');
  var canvas = createCanvas(480, 400);
  canvas.parent('aplicacoes');

  noStroke();
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

}


function draw() {
  background(bg);
  // Animate by increasing our x value
  x = x + 0.8;
  // If the shape goes off the canvas, reset the position
  if (x > width + dim) {
    x = -dim;
  }
  setGradient(10, 10, x, 30, color(255, 0, 0), color(255 - x, 0, x), X_AXIS);
  // Even though our rect command draws the shape with its
  // center at the origin, translate moves it to the new
  // x and y position
/*  translate(0, height / 2);
  fill(255);
  rect(10, 10, x, 30, 10);
  // Transforms accumulate. Notice how this rect moves
  // twice as fast as the other, but it has the same
  // parameter for the x-axis value
  translate(x, dim);
  fill(0);
  rect(-dim / 2, -dim / 2, dim, dim);*/
}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }