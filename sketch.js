let icecream = ["vanilla","chocolate", "mint", "bubblegum"];


function setup() {
  createCanvas(600, 600);
  background(200);

  console.log("initial array is" + icecream);
  console.log(icecream);

  icecream.pop();
  console.log("array after pop")
  console.log(icecream);

  icecream.push("doublescoop");

}

function draw() {

}
