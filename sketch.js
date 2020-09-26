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
}
];

function setup() {
  createCanvas(600, 600);
  background(200);

  console.log("initial array is ");
  console.log(icecream);

  icecream.shift(2, 2);
  console.log("array after shift")
  console.log(icecream);

  icecream.unshift("doublescoop");
  console.log("array after unshift")
  console.log(icecream);

}

function draw() {

}
