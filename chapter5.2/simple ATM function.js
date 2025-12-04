function withdrawMoney(balance, amount) {
  if (amount <= balance) {
    balance -= amount;
    console.log("Withdrawal successful. New balance: $" + balance);
    return balance;
  } else {
    console.log("Insufficient funds.");
  }
}
withdrawMoney(200, 50);
withdrawMoney(100, 150);
