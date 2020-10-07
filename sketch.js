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

let randomIndex;
let animating = true;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("randomize", 200, 300);

  setInterval(changeBackground, 1000);

  console.log(icecream[0].name);

}

function draw () {
  if (animating == true) {
    ellipse(random(600), random (100), random(100, 100));
    fill(0);
  }
}

function changeBackground () {
    background (random(255), random(255), random(255));
}

function randomizer() {
  if (icecream[0]) {
    background(random (200, 255));
    randomIndex = int(random(icecream.length));
    text(icecream[randomIndex].name, 200, 300);
    icecream.splice(randomIndex, 1);
  }
  else  {
    background(random (200, 255));
    text("no answer", 200, 300);
  }
}

function mousePressed() {
    setTimeout(randomizer, 50);
}

