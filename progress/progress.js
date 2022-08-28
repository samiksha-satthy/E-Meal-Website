var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", results);

function results(event) {
  event.preventDefault();
  // height
  var currentHeight = parseFloat($('.currentHeight').val());
  var prevHeight = parseFloat($('.prevHeight').val());

  // weight
  var currentWeight = parseFloat($('.currentWeight').val());
  var prevWeight = parseFloat($('.prevWeight').val());

  // change
  var heightChange = currentHeight - prevHeight;
  var weightChange = currentWeight - prevWeight;
  cardContainer.append(`
    <p class="result">You grew ${heightChange} cm and your change in weight is ${weightChange} kg. </p>`
  );

}

