//ice cream flavors
let icecream = ["vanilla","chocolate", "mint", "bubblegum", "cookiedough"];

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
