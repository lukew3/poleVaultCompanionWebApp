//Carousel Code
$('.owl-carousel').owlCarousel({
  //loop: true,
  margin: 10,
  //nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  responsive: {
    0: {
      loop: true,
      items: 1,
      nav: true
    },
    1000:{
			items:3,
			nav: false,
			loop:false
		}
  }
})

//Calculator Code
function sumValues() {
  console.log("sumValues Run");
  var num1=Number(document.formcalc.txtnum1.value);
  //The line below only runs and displays in console if the screen is set to show all three slides at once
  console.log("num1 equals " + num1)
  var num2=Number(document.formcalc.txtnum2.value);
  var res=num1+num2;
  document.formcalc.txtres.value=res;
}

//Height Predictor
function vaultPredictor() {
  console.log("predictor ran");
  //r massLbs = Number(document.heightPredictor.mass.value);
  var velocity = Number(document.heightPredictor.vel.value);
  //nsole.log(velocity);
  var centerOfMassIn = (Number(document.heightPredictor.height.value))/2;
  //r massKg = massLbs/2.205;
  var centerOfMassM = centerOfMassIn/39.37;
  console.log(centerOfMassM);
  var heightIncrease = (1/2)(velocity*velocity)/9.8;
  console.log(heightIncrease);
  var vaultHeight = heightIncrease+centerOfMassM;
  document.heightPredictor.output.value=vaultHeight;
}