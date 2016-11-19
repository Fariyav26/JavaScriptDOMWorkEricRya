function calcTip() {
  var input = document.getElementById("amount").value;

  if (!isNaN(parseFloat(input))) {
    var amount = parseFloat(input);
    alert("Amount is $" + amount.toFixed(2));
    var tip = .2 * amount;
    alert("Tip amount is $" + tip.toFixed(2));
    document.getElementById("tipDisplay").innerHTML = "Tip (20%): $" + tip.toFixed(2);
  }
  else {
    alert("Error: This is not a number.");
  }
}
