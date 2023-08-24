function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(200);
  noStroke();
  fill('rgb(250,249,246)');
  arc(350, 350, 200, 200, TWO_PI, PI);
  triangle(250, 350, 350, 300, 450, 350)
  stroke('black');
  fill('white');
  arc(350, 335, 50, 30, TWO_PI,  PI);
  // arc(350, 360, 30, 20, PI, TWO_PI);
  // arc(350, 360, 30, 20, TWO_PI, PI);
  ellipse(350, 360, 30, 20);
  fill('black');
  circle(350, 360, 20);
  fill('white')
  
  arc(350, 380, 10, 5, PI - QUARTER_PI, QUARTER_PI);
  fill('black');
  circle(350, 410, 30);
  
  // noStroke();
  arc(250, 350, 80, 100, PI/2, 3*PI/2);
  arc(450, 350, 80, 100, 3*PI/2, PI/2);
  triangle(250, 350, 250, 300, 350, 300);
  arc(300, 300, 100, 70, PI, TWO_PI, OPEN);
  triangle(350, 300, 450, 300, 450, 350)
  arc(400, 300, 100, 70, PI, TWO_PI, OPEN);
  
}