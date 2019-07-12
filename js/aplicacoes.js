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
  var canvas = createCanvas(560, 400);
  canvas.parent('aplicacoes');

  noStroke();
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

}

let agua = 0;
function draw() {
  let blue = color('blue');
  let red = color('red');
  let orange = color('orange');
  let yellow = color('yellow');
    background(bg);
  // Animate by increasing our x value
  agua += 4;
  // If the shape goes off the canvas, reset the position
  if (agua > 800) {
    agua = 0;
  }
  
  
  if (agua < 350) {
    setGradient(50, 210, agua, 30, blue, red, X_AXIS);
//    setGradient(50, 210, agua, 30, color(255- agua, 0, agua), color(255, 0, 0), X_AXIS);
  } else if (agua > 350 && agua < 420) {

    setGradient(50, 210, 370, 30, blue, red, X_AXIS);
    setGradient(390, 240-(agua-350), 30, agua-380, orange, red, Y_AXIS);
//    setGradient(50, 210, 370, 30, color(255-450, 0, 450), color(255, 0, 0), X_AXIS);
//    setGradient(390, 240-(agua-350), 30, agua-380, color(255- 450, 0, 450), color(255, 0, 0), Y_AXIS);

  } else {
    setGradient(50, 210, 370, 30, blue, red, X_AXIS);
    setGradient(390, 140, 30, 69,  orange, red, Y_AXIS);
    setGradient(390-(agua-450), 140, (agua-450), 30, yellow, orange, X_AXIS);
//    setGradient(50, 210, 370, 30, color(255-agua, 0, agua), color(255, 0, 0), X_AXIS);
//    setGradient(390, 140, 30, 69,  color(255, 0, 0), color(255- 450, 0, 450), Y_AXIS);
//    setGradient(390-(agua-450), 140, (agua-450), 30, color(255, 0, 0), color(255- agua, 0, agua), X_AXIS);
  }
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