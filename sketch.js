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

function setup() {
  createCanvas(600, 600);
  background(200);

  setInterval(changeBackground, 1000);

  textSize(32);

  text(icecream.name, 200, 200);

  console.log(icecream[0].name);

  console.log("initial array is ")
  console.log(icecream);

  icecream.pop();
  console.log("array after pop")
  console.log(icecream);

  icecream.push();
  console.log("array after push")
  console.log(icecream);

}

function draw () {
  randomizer;
}
  
function randomizer() {
    randomIndex = int(random(icecream.length));  
    text(icecream[randomIndex].name, 200, 200);
    icecream.splice(randomIndex, 1);
  }

function mousePressed() {
    setTimeout(randomizer, 50);
}

function changeBackground () {
  background (random(255), random(255), random(255));
}