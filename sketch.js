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

function setup() {
  createCanvas(600, 600);
  background(200);

  console.log("initial array is ")
  console.log(icecream);

  icecream.pop();
  console.log("array after pop")
  console.log(icecream);

  icecream.push();
  console.log("array after push")
  console.log(icecream);

}

function draw() {

}
