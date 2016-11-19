function divine() {
  var array = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "You seriously think I have the answer, moron?"];

  var stop = document.getElementById("txt8ball").value;
  var random = Math.floor(Math.random()* array.length);

  if(stop === "STOP") {
    document.getElementById("answers8ball").innerHTML = "";
    document.getElementById("txt8ball").value = "";
  }
  else {
    document.getElementById("answers8ball").innerHTML = array[random];
  }
}
