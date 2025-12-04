function makeCoffee(type = "Black Coffee", sugar = 1) {
  console.log("Making " + type + " with " + sugar + " spoon(s) of sugar.");
  
  if (sugar > 3) {
    console.log("That's too much sugar!");
  }
}


makeCoffee();
makeCoffee("Latte", 2);
makeCoffee("Cappuccino", 5);
