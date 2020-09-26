//ice cream flavors
let icecream = ["vanilla","chocolate", "mint", "bubblegum", "cookiedough"];

function setup() {
  createCanvas(600, 600);
  background(200);

  console.log("initial array is");
  console.log(icecream);

  icecream.splice(2, 2);
  console.log("array after splice")
  console.log(icecream);


}

function draw() {

}
