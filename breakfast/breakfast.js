// declare an array to store sweetbreakfast foods
var sweetBreakfast = [
  {
    name: "Overnight Oats",
    recipe: "https://www.bbcgoodfood.com/recipes/overnight-oats",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/overnight-oats-32a2747.jpg",
  },
  {
    name: "Sunshine Smoothie",
    recipe: "https://www.bbcgoodfood.com/recipes/sunshine-smoothie",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sunshine-smoothie-0250bef.jpg",
  },
  {
    name: "Strawberry Smoothie",
    recipe: "https://www.bbcgoodfood.com/recipes/strawberry-smoothie",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoothie-e080f40.jpg",
  },
  {
    name: "Strawberry Pancakes",
    recipe: "https://www.bbcgoodfood.com/recipes/vegan-strawberry-pancakes",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Vegan-strawberry-pancakes-2629dc1.jpg",
  },
  {
    name: "Breakfast Egg Wraps",
    recipe: "https://www.bbcgoodfood.com/recipes/breakfast-egg-wraps",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/05/breakfast-egg-wraps-c0880fe.jpg",
  },
  {
    name: "Cheesy Frittatas",
    recipe: "https://www.bbcgoodfood.com/recipes/easy-cheesy-frittata",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-231460_10-81626ab.jpg",
  },
  {
    name: "Breakfast Bagel",
    recipe: "https://www.bbcgoodfood.com/recipes/breakfast-bagel-club",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/avocado-salmon-bagel12476-b4a4f98.jpg",
  },
  {
    name: "Breakfast Burritos",
    recipe: "https://www.bbcgoodfood.com/recipes/breakfast-burrito",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/breakfast-burrito-b086548.jpg",
  }
];

// wait for button click
var mealContainer = $('.sweetmeals');
var sweetButton = $('.sweet');
sweetButton.on("click", pickBreakfastSweet);

// choose a random item from sweetBreakfast
function pickBreakfastSweet() {
  var rand = Math.random()
  var rand1 = rand * sweetBreakfast.length
  var final = Math.floor(rand1)
  console.log(final)
  mealContainer.append(`<p><a href="${sweetBreakfast[final].recipe}">${sweetBreakfast[final].name}</a></p>
<img src="${sweetBreakfast[final].image}"><br>`)
}
