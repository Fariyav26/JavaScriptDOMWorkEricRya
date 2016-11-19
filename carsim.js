var car;

function clickGetCar() {
  car = makeCar(document.getElementById("yInput").value,document.getElementById("maInput").value,document.getElementById("moInput").value);
  document.getElementById("carString").innerHTML = "Your car is a " + car.toString() +".";
}

function accelBrake() {
  while (car.speed < 70) {
    car.accel();
    alert(car.speed + " mph");
  }
  while (car.speed > 0) {
    car.brake();
    alert(car.speed + " mph");
  }
}

function runSlipperyRoad() {
  car.speed = 50;
  while (car.speed < car.maxSpeed && car.speed > car.minSpeed) {
    car.slipperyRoad();
    alert(car.speed + " mph");
  }
}

//---------------------
function makeCar(y,ma,mo) {
  return {
    year: y,
    make: ma,
    model: mo,
    speed: 0,
    maxSpeed: 85,
    minSpeed: 0,
    accelAmt: 10,
    brakeAmt: 7,
    accel: function() {
      if ((this.maxSpeed-this.speed)<this.accelAmt) {
        this.speed = this.maxSpeed;
      }
      else {
        this.speed += this.accelAmt;
      }
    },
    brake: function() {
      if ((this.speed-this.minSpeed)<this.brakeAmt) {
        this.speed = this.minSpeed;
      }
      else {
        this.speed -= this.brakeAmt;
      }
    },
    slipperyRoad: function() {
      var posNeg = Math.floor(Math.random()*2);
      var random = Math.floor(Math.random()*(1+this.speed));
      if (posNeg === 1) {
        this.speed += random;
      }
      else {
        this.speed -= random;
      }
    },
    toString: function() {
      return this.year + " " + this.make + " " + this.model;
    }
  }
}
