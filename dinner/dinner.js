// declare an array to store sweetbreakfast foods
var dinnerOptions = [
  {
    name: "Pho",
    recipe: "https://www.bbcgoodfood.com/recipes/beef-pho",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/beef-pho-cbd3623.jpg",
  },
  {
    name: "Roast Dinner",
    recipe: "https://www.bbcgoodfood.com/recipes/one-pan-roast-dinner",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-513808_11-c61f40b.jpg",
  },
  {
    name: "Pizza Margherita",
    recipe: "https://www.bbcgoodfood.com/recipes/pizza-margherita-4-easy-steps",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-51643_11-2f4a2cc.jpg",
  },
  {
    name: "Pad Thai",
    recipe: "https://www.bbcgoodfood.com/recipes/next-level-pad-thai",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pad-thai-6de3820.jpg",
  },
  {
    name: "Singapore Noodles",
    recipe: "https://www.bbcgoodfood.com/recipes/singapore-noodles-0",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-926487_11-a030344.jpg",
  },
  {
    name: "Rump Steak",
    recipe: "https://www.bbcgoodfood.com/recipes/rump-steak",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/steak-and-chips-f385bf3.jpg",
  },
  {
    name: "Meatball and Tomato Soup",
    recipe: "https://www.bbcgoodfood.com/recipes/meatball-tomato-soup",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-tomato-soup-afa0bd0.jpg",
  },
  {
    name: "Beef Bulgogi Stir-fry",
    recipe: "https://www.bbcgoodfood.com/recipes/beef-bulgogi-stir-fry",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/beef-bulgogi-stir-fry-bb1391f.jpg",
  },
  {
    name: "Home-style Chicken Curry",
    recipe: "https://www.bbcgoodfood.com/recipes/home-style-chicken-curry",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-908515_10-0551430.jpg",
  },
  {
    name: "Salt and Pepper Chicken",
    recipe: "https://www.bbcgoodfood.com/recipes/salt-pepper-chicken",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salt-pepper-chicken-5101b7d.jpg",
  },
  {
    name: "Prawn Fried Rice",
    recipe: "https://www.bbcgoodfood.com/recipes/prawn-fried-rice",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn-fried-rice-a36cef9.jpg",
  },
  {
    name: "Chicken Pasta Bake",
    recipe: "https://www.bbcgoodfood.com/recipes/chicken-pasta-bake",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-06fe2d6.jpg",
  }
];

// wait for button click
var mealContainer = $('.dinnerChoices');
var dinnerButton = $('.dinner');
dinnerButton.on("click", pickDinner);

// choose a random item from dinnerOptions
function pickDinner() {
  var rand = Math.random()
  var rand1 = rand * dinnerOptions.length
  var final = Math.floor(rand1)
  console.log(final)
  mealContainer.append(`<p><a href="${dinnerOptions[final].recipe}">${dinnerOptions[final].name}</a></p>
<img src="${dinnerOptions[final].image}"><br>`)
}
