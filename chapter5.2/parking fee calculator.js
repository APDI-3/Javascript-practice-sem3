function calculateParkingFee(hours) {
  let fee;

  if (hours > 10) {
    fee = 10;
  } else if (hours <= 3) {
    fee = hours * 2;
  } else {
    fee = (3 * 2) + ((hours - 3) * 1);
  }

  console.log("Total parking fee: $" + fee);
  return fee;
}

calculateParkingFee(2);
calculateParkingFee(5);
calculateParkingFee(11);