var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendBMI);

function appendBMI(event) {
  event.preventDefault();
  var height = parseFloat($('.height').val());
  console.log(height);
  var heightInM = height / 100;
  console.log(heightInM);
  var weight = parseFloat($('.weight').val());
  console.log(weight)
  var BMI = weight / heightInM / heightInM;
  console.log(BMI)
  cardContainer.append(`
    <p class="bmi-class">Your BMI is ${BMI}. </p>
  `);

  // reset
  var heightInput = $('.height');
  heightInput.val("");
  var weightInput = $('.weight');
  weightInput.val("");
  var heightInM = 0;
  var weight = 0;
}