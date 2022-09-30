let threeColors = ['#DF2935', '#05204A', '#B6C649']


function setup() {
  createCanvas(1000, 1000);
  noStroke()
  noLoop()
}

function draw() {
  for (x = 0; x < 1001; x += 50) {
    for (y = 0; y < 1001; y += 50) {
      push();
      translate(x, y);
      block()
      circleInBlock()
      pop()
    }
  }
}

function block() {
  fill(random(255), random(255), random(255))
  rect(0, 0, 50, 50)
}

function circleInBlock() {
  fill(random(255), random(255), random(255))
  ellipse(0, 0, 50, 50)
}