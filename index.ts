let balance = 1000; // initial balance

function checkBalance(): number {
  return balance
}

function deposit(amount: number): void {
  balance += amount;
}

function withdraw(amount: number): boolean {
  if (amount <= balance) {
    balance -= amount;
    return true;
  } else {
    console.log("Insufficient funds.");
    return false;
  }
}
function changePin(oldPin: string, newPin: string): boolean {
  // assume the oldPin is "1234"
  if (oldPin === "1234") {
    console.log("PIN changed successfully.");
    return true;
  } else {
    console.log("Incorrect PIN.");
    return false;
  }
}
// Example usage
console.log(checkBalance()); // Output: 1000
deposit(500);
console.log(checkBalance()); // Output: 1500
withdraw(2000); // Output: "Insufficient funds."
withdraw(500);
console.log(checkBalance()); // Output: 1000
changePin("4321", "5678"); // Output: "Incorrect PIN."
changePin("1234", "5678"); // Output: "PIN changed successfully."

