let randomIndex;
let animating = true;
let IceCream = [];
let imageCounter = 0;

function preload () {
 for (let i = 0; i <= 4; i++) {
   IceCream[i] = loadImage(`Assets/Resized_Images/IceCream_${i}.jpg`)
 }
}

function setup() {
  createButton("Click To Randomize");

  createCanvas(400, 400);
  background(200);
  textSize(32);
  frameRate(12);

  text("Click Here", 0, 0);
  console.log(IceCream);
}

function draw () {
    if (animating == true) {
      clear();
      image(IceCream[imageCounter], 0, 0);
      if (imageCounter < IceCream.length - 1) {
      imageCounter++;
      console.log(imageCounter);
      }
      else {
        imageCounter = 0;
      }
    }
}

function mousePressed () {
    draw();
}
