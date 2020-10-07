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

  text("randomize", 200, 100);

  setInterval(changeBackground, 1000);

  console.log(icecream[0].name);
  console.log(IceCream);

}

function draw () {
    if (animating == true) {
      image(IceCream, 200, 200);
  }
}

function changeBackground () {
    background (random(255), random(255), random(255));
}

function randomizer() {
  if (icecream[0]) {
    background(random (200, 255));
    randomIndex = int(random(icecream.length));
    text(icecream[randomIndex].name, 200, 100);
    icecream.splice(randomIndex, 1);
  }
  else  {
    background(random (200, 255));
    text("no answer", 200, 100);
  }
}

function mousePressed() {
    setTimeout(randomizer, 50);
}

