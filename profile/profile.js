var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", submitProfile);

function submitProfile(event) {
  event.preventDefault();
  
  var name = $('.name').val();
  var age = $('.age').val();
  var birthday = $('.birthday').val();
  var weight = $('.weight').val();
  var height = $('.height').val();
  
  cardContainer.append(`
    <p class="profile">Name: ${name} </p>
  `);

  cardContainer.append(`
    <p class="profile">Age: ${age} </p>
  `);

  cardContainer.append(`
    <p class="profile">Birthday: ${weight}. </p>
  `);

  cardContainer.append(`
    <p class="profile">Weight: ${weight} kg. </p>
  `);

  cardContainer.append(`
    <p class="profile">Height: ${height} cm. </p>
  `);
}