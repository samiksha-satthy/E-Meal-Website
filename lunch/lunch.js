var lunchRecipes = [
  {
    name: "Super Leek and Potato Soup",
    recipe: "https://www.jamieoliver.com/recipes/vegetable-recipes/super-leek-potato-soup/",
    image: "https://img.jamieoliver.com/jamieoliver/recipe-database/134575795.jpg",
  },
  {
    name: "Crispy Rice Pancakes",
    recipe: "https://www.jamieoliver.com/recipes/pancake-recipes/crispy-rice-pancakes/",
    image: "https://img.jamieoliver.com/jamieoliver/recipe-database/134655533.jpg",
  },
  {
    name: "Barbequed Chicken Rice Bowls",
    recipe: "https://www.taste.com.au/recipes/barbecued-chicken-rice-bowls/lMoqvRsX?r=recipes/healthylunchrecipes&c=68effe34-6166-49c5-9fa2-5b3c109ca86e/Healthy%20lunch%20recipes",
    image: "https://img.taste.com.au/CoZrrEN_/w720-h480-cfill-q80/taste/2018/02/barbecued-chicken-rice-bowls-taste-135064-1.jpg",
  },
  {
    name: "Lime Prawn Cocktail Pitta Salad",
    recipe: "https://www.bbcgoodfood.com/recipes/lime-prawn-cocktail-pitta-salad",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/lime-prawn-cocktail-pitta-salad-8864325.jpg?resize=960,872?quality=90&webp=true&resize=375,341",
  },
  {
    name: "Bombay Potato Frittata",
    recipe: "https://www.bbcgoodfood.com/recipes/bombay-potato-frittata",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bombay-potato-frittata-f0d52f5.jpg",
  },
  {
    name: "Salmon Pasta Salad with Lemon and Capers",
    recipe: "https://www.bbcgoodfood.com/recipes/salmon-pasta-salad-lemon-capers",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmon-pasta-8e85b03.jpg?resize=960,872?quality=90&webp=true&resize=375,341",
  },
  {
    name: "Tomate and Caper Linguine",
    recipe: "https://www.jamieoliver.com/recipes/pasta-recipes/tomato-caper-linguine/",
    image: "https://img.jamieoliver.com/jamieoliver/recipe-database/FWu9vav74jz9YKkPYWnU44.jpg",
  }
];

// wait for button click
var mealContainer = $('.lunchChoices');
var lunchButton = $('.lunchOptions');
lunchButton.on("click", pickLunch);

// choose a random item from sweetBreakfast
function pickLunch() {
  var rand = Math.random()
  var rand1 = rand * lunchRecipes.length
  var final = Math.floor(rand1)
  console.log(final)
  mealContainer.append(`<p><a href="${lunchRecipes[final].recipe}">${lunchRecipes[final].name}</a></p>
<img src="${lunchRecipes[final].image}"><br>`)
}
