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
  text("Click Here", 0, 0);
  createCanvas(400, 400);
  background(200);
  frameRate(12);
  text("Click Here", 0, 0);

  button = createButton('RANDOMIZE');
  //button.position(450, 500)
  button.mousePressed();

  //console.log(IceCream);
}

//button.mousePressed(buttonPressed);

function mousePressed() {  
    if (animating == true) {
      clear();
      image(IceCream[imageCounter], 0, 0);
      if (imageCounter < IceCream.length - 1) {
      imageCounter++;
      console.log(imageCounter);
      }
      else {
        imageCounter = 0;
        background(200);
        text('NO MORE ITEMS');
      }
    }
}

//function randomizer () {
  //animating = false;
//}
