let len = 4;
let angle = 0;
let angleSlider, lenSlider;
let lenSpeed = 1;

function setup() {
  createCanvas(640, 400); // width, height
  background(20);
  angleSlider = createSlider(0, TWO_PI, PI / 2, 0.001); 
  lenSlider = createSlider(0, 150, 100, 1);
}

function draw() {
  angle = angleSlider.value();
  len = lenSlider.value();
  // angle += 0.002;
  // len += lenSpeed;
  if (len > 250 || len < 4) {
    lenSpeed *= -1;
  }
  
  strokeWeight(1);
  line(width / 2, height, width / 2, height - len);
  translate(width / 2, height);
  branch(len);
  frameRate(40);
  if (frameCount % 15 == 0) {
    background(20);
    stroke(random(255), random(255), random(255));
  }
}

function branch(len) {
  
  line(0, 0, 0, -len);
  translate(0, -len);
  
  if (len > 30) {
    push()
    rotate(angle);
    branch (len * 0.75);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.75);
    pop();
  }
}