//ice cream flavors
let icecream = [
{
  name: "vanilla",
  topping: "topping"
},

{
  name: "chocolate",
  topping: "truffles"
},

{
  name: "mint",
  topping: "sprinkles"
},

{
  name: "bubblegum",
  topping: "waffles"
},

{
  name:"cookiedough",
  topping: "chocolatechip"
}
];

let IceCream = [];
let randomIndex;
let animating = true;

function preload () {
 for (let i = 0; i <= 4; i++) {
   IceCream[i] = loadImage(`Assets/Resized_Images/IceCream_${i}.jpg`)
 }
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  imageMode(CENTER);
  frameRate(12);

  text("randomize", 200, 100);

  setInterval(changeBackground, 1000);

  console.log(icecream[0].name);
  console.log(IceCream);

}

function draw () {
    if (animating == true) {
      clear();
      image(IceCream[0], 0, 0);

      if (imageCounter < IceCream.length - 1){
        imageCounter++;
        console.log(imageCounter);
      }
      else {
        imageCounter = 0;
      }
    }
}

function changeBackground () {
    background (random(255), random(255), random(255));
}

function randomizer() {
  animating = false;
  if (icecream[0]) {
    background(changeBackground);
    randomIndex = int(random(icecream.length));
    text(icecream[randomIndex].name, 200, 100);
    icecream.splice(randomIndex, 1);
  }
}

function mousePressed() {
  setTimeout(randomizer, 50);
}
