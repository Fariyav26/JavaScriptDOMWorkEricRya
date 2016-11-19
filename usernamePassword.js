function runChecker() {
  var uname = document.getElementById("unameTxt").value;
  var upass = document.getElementById("pwordTxt").value;

  if (checker(uname,upass)) {
    document.getElementById("accepted").innerHTML = "Okay?: YES";
  }
  else {
    document.getElementById("accepted").innerHTML = "Okay?: ERROR";
  }
}

function checker(u,p) {
  return same(u,p) && geSix(u) && geSix(p) && hasNoChars(u) && hasChars(p) && hasDigit(p) && hasUpperLower(p);
}

//--------------------------
function same(u, p){
  //console.log("same");
  return u != p;
}

function geSix(word) {
  //console.log("geSix");
  return word.length >= 6;
}

function hasNoChars(word){
  //console.log("hasnochars");
  if (word.includes("!")) {
    return false;
  }
  if (word.includes("#")) {
    return false;
  }
  if (word.includes("$")){
    return false;
  }
  return true;
}

function hasChars(word) {
  //console.log("haschars");
  return !hasNoChars(word);
}

function hasDigit(word) {
  //console.log("hasdigit");
  return (word.includes("0") || word.includes("1") || word.includes("2") || word.includes ("3") || word.includes("4") || word.includes("5") || word.includes("6") || word.includes("7") || word.includes("8") || word.includes("9"));
}

function hasUpperLower(word) {
  //console.log("hasupperlower");
  if (word.toUpperCase() === word || word.toLowerCase() === word) {
    return false;
  }
  else {
    return true;
  }
}
