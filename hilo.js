//hilo.js

var cNum = Math.floor(1+(Math.random()*100));
var uNum = 0;
var count = 0;
var name = "";
var maxCount = 7;

function onClick() {
  if (count === 0) {
    name = document.getElementById("txt").value;
    clearText();
    document.getElementById("par").innerHTML = "Now put in a number between 1 and 100";
    //alert(count);
    count++;
  }
  else if (count > maxCount) {
    document.getElementById("par").innerHTML = "Hello! Please enter your name.";
    reset();
    clearText();
  }
  else {
    if (isNaN(parseInt(document.getElementById("txt").value))) {
      document.getElementById("par").innerHTML = "Error: Not a Number.";
      clearText();
    }
    else {
      uNum=parseInt(document.getElementById("txt").value);
      count++;
      if (won()) {
        document.getElementById("par").innerHTML = "You won, click enter to play again";
        count = maxCount+1;
      }
      else {
        if (countIncomplete()) {
          //document.getElementById("par").innerHTML = "Try again";
          if (uNum<cNum) {
            document.getElementById("par").innerHTML = "Enter Higher Number!";
          }
          else {
            document.getElementById("par").innerHTML = "Enter lower Number!";
          }
        }
        else {
          document.getElementById("par").innerHTML = "You lose, click enter to play again";
          count = maxCount+1;
        }
      }
    }
  }
}

function won(){
  return uNum===cNum;
}

function countIncomplete(){
  return count <= maxCount;
}

function reset() {
  cNum = Math.floor(1+(Math.random()*100));
  uNum = 0;
  count = 0;
  name = "";
}

function clearText() {
  document.getElementById("txt").value = "";
}
