let icecream = ["vanilla","chocolate", "mint", "bubblegum", "cookiedough"];


function setup() {
  createCanvas(600, 600);
  background(200);

  console.log("initial array is" + icecream);
  console.log(icecream);

  icecream.pop();
  console.log("array after pop")
  console.log(icecream);

  icecream.push("doublescoop");
  console.log("array after push")
  console.log(icecream);

}

function draw() {

}
