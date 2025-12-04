function calculateTotal(price, quantity) {
  let total = price * quantity;

  if (total > 100) {
    console.log("You get a 10% discount!");
    total = total - (total * 0.10);
  }

  console.log("Total amount: $" + total);
  return total;
}
calculateTotal(25, 3);
calculateTotal(50, 3);
