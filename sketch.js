let icecream = [
  {
    name: "vanilla",
  },
  
  {
    name: "chocolate",
  },
  
  {
    name: "mint",
  },
  
  {
    name: "bubblegum",
  },
  
  {
    name:"cookiedough",
  }
  ];


let randomIndex;
let animating = true;
let IceCream = [];
let imageCounter = 0;
let nameInputs = [];

function preload () {
 for (let i = 0; i < 5; i++) {
   IceCream[i] = loadImage(`Assets/Resized_Images/IceCream_${i}.jpg`)
 }
}

function setup() {
  createCanvas(400, 400);
  background(200);
  frameRate(12);
  textSize(32);
  text("Click Here", 100, 100);

  button = createButton("RANDOMIZE");
  button.mousePressed();
}

//button.mousePressed(buttonPressed);

function mousePressed() {  
    if (animating == true) {
      clear();
      image(IceCream[imageCounter], 0, 0);
      if (imageCounter < IceCream.length + 1) {
      imageCounter++;
      console.log(imageCounter);
      }
      else {
        imageCounter = 0;
      }
    }
}

function randomizer() {
  animating == false 
    if (icecream[0]) {
      background(220);
      randomIndex = int(random(icecream.length));  
      text(icecream[randomIndex].name);
      icecream.splice(randomIndex, 1);
    }
    else {
      background(220);
      text("NO MORE ITEMS", 100, 100);
    } 
}


