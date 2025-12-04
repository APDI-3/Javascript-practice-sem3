
function checkEvenOdd(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i + " is Even");
    } else {
      console.log(i + " is Odd");
    }
  }
}

checkEvenOdd(5);
