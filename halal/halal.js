// declare an array to store breakfast foods
var breakfast = [
  {
    name: "Vegan Banana Oatmeal Pancakes",
    recipe: "https://healthiersteps.com/recipe/vegan-banana-oatmeal-pancakes/?fbclid=IwAR3OYZ_JUgVJ7yIls9QIw9xeUfLz3Qm4Mgs30Bi0LBnbgSZ-LzLJpZRXdzw",
    image: "https://www.vegannie.com/cms/wp-content/uploads/2019/02/banana-oatmeal-pancakes-sliced.jpg",
  },
  {
    name: "Blended Baked Oats",
    recipe: "https://www.delish.com/cooking/recipe-ideas/a35728852/blended-baked-oats-tiktok/",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-03-11-delish-tik-tok-baked-oatmeal0053-1615848688.jpg",
  },
  {
    name: "Strawberry Smoothie",
    recipe: "https://www.bbcgoodfood.com/recipes/strawberry-smoothie",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoothie-e080f40.jpg",
  },
  {
    name: "Pop Tarts",
    recipe: "https://www.delish.com/cooking/recipe-ideas/a32715418/gluten-free-pop-tarts-recipe/",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200429-keto-poptarts-003-ab-jpg-1639174146.jpg",
  },
  {
    name: "Loaded Cauliflower Breakfast Bake",
    recipe: "https://www.delish.com/cooking/recipe-ideas/recipes/a51520/loaded-cauliflower-breakfast-bake-recipe/",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200114-cheesy-caulflower-breakfast-bake-0403-landscape-pf-1580225038.jpg",
  },
  {
    name: "Cinnamon Roll Baked Oatmeal",
    recipe: "https://www.delish.com/cooking/recipe-ideas/a22812597/baked-oatmeal-recipe/",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cinnamon-roll-baked-oatmeal-horizontal-1535657909.jpg?crop=0.378xw:1.00xh;0.372xw,0&resize=768:*",
  },
  {
    name: "Best-Ever Egg Muffins",
    recipe: "https://www.delish.com/cooking/recipe-ideas/a25563943/egg-muffins-recipe/",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-kitchen-sink-egg-muffins-071-1545170199.jpg?crop=1xw:1xh;center,top&resize=768:*",
  },
  {
    name: "Cloud Eggs",
    recipe: "https://www.delish.com/cooking/recipe-ideas/recipes/a52748/cloud-eggs-recipe/",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-cloud-eggs-horizontal-1536076899.jpeg?crop=0.3930666666666667xw:1xh;center,top&resize=980:*",
  }
];

var lunchRecipes = [
  {
    name: "Shrimp Avocado Salad",
    recipe: "https://www.tasteofhome.com/recipes/shrimp-avocado-salad/",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Shrimp-Avocado-Salad_EXPS_HC16_192652_C07_01_2b-6.jpg?w=1200",
  },
  {
    name: "Herbed Tuna and White Bean Salad",
    recipe: "https://www.tasteofhome.com/recipes/herbed-tuna-and-white-bean-salad/",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/05/Herbed-Tuna-and-White-Bean-Salad_EXPS_SDJJ18_199950_B02_09_3b-2.jpg?w=1200",
  },
  {
    name: "Ricotta-Stuffed Portobello Mushrooms",
    recipe: "https://www.tasteofhome.com/recipes/ricotta-stuffed-portobello-mushrooms/",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Ricotta-Stuffed-Portobello-Mushrooms_exps139904_TH143192B02_07_6bC_RMS.jpg?resize=1024,1024",
  },
  {
    name: "Veg Jambalaya",
    recipe: "https://www.tasteofhome.com/recipes/veg-jambalaya/",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Veg-Jambalaya_EXPS_OPBZ18_133448_C06_29_1b-15.jpg?w=1200",
  },
  {
    name: "Avocado Crab Boats",
    recipe: "https://www.tasteofhome.com/recipes/avocado-crab-boats/",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Avocado-Crab-Boats_EXPS_FTTMZ18_139621_D11_15_5b-6.jpg?w=1200",
  },
  {
    name: "Cool Beans Salad",
    recipe: "https://www.tasteofhome.com/recipes/cool-beans-salad/",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Cool-Beans-Salad_EXPS_OPBZ18_120578_B06_07_4b-41.jpg?w=1200",
  },
  {
    name: "California Burger Wraps",
    recipe: "https://www.tasteofhome.com/recipes/california-burger-wraps/",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/05/California-Burger-Wraps_EXPS_SDJJ18_162210_D02_08_1b-21.jpg?w=1200",
  }
];

// declare an array to store sweetbreakfast foods
var dinnerOptions = [
  {
    name: "Stir Fry",
    recipe: "https://www.bettycrocker.com/recipes/gluten-free-spicy-peanut-chicken-stir-fry/ffcaffe4-d882-4877-afcb-8f9d345fcb64",
    image: "https://images-gmi-pmc.edge-generalmills.com/83615083-ecb5-48ae-a875-3e02893ac54b.jpg",
  },
  {
    name: "Mac and Cheese",
    recipe: "https://glutenfreeonashoestring.com/easy-stovetop-gluten-free-mac-and-cheese/",
    image: "https://glutenfreeonashoestring.com/wp-content/uploads/2017/05/new-closeup-image-mac-and-cheese.jpg",
  },
  {
    name: " Baked Chicken Tenders",
    recipe: "http://www.anediblemosaic.com/baked-chicken-tenders-gluten-free/",
    image: "https://glutenbee.com/wp-content/uploads/2017/07/DSC_7463small1.jpg",
  },
  {
    name: "Pad Thai",
    recipe: "https://www.bbcgoodfood.com/recipes/next-level-pad-thai",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pad-thai-6de3820.jpg",
  },
  {
    name: "Pizza",
    recipe: "http://www.epicurious.com/recipes/food/views/gluten-free-pizza-241924",
    image: "https://assets.epicurious.com/photos/560d78327b55306961bf3354/master/w_960,c_limit/241924.jpg",
  },
  {
    name: "Rump Steak",
    recipe: "https://www.bbcgoodfood.com/recipes/rump-steak",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/steak-and-chips-f385bf3.jpg",
  },
  {
    name: "Spicy Bean and Cucumber Salad",
    recipe: "https://www.bettycrocker.com/recipes/spicy-bean-and-cucumber-salad/344597ee-a283-479a-bebc-842c0cf6d119",
    image: "https://images-gmi-pmc.edge-generalmills.com/45baa53b-07b3-4d46-a812-6939a3231234.jpg",
  },
  {
    name: "Indian Chicken Curry",
    recipe: "https://www.bettycrocker.com/recipes/gluten-free-indian-chicken-curry/24c04a31-af51-4505-a7ac-e4997fae6120",
    image: "https://images-gmi-pmc.edge-generalmills.com/d02138c6-cfec-40b3-943d-a531b1bc3723.jpg",
  },
  {
    name: "Fire-Roasted Tomato Gazpacho",
    recipe: "https://www.bettycrocker.com/recipes/fire-roasted-tomato-gazpacho/37faaa0f-afc6-4ce6-ab55-130917715921",
    image: "https://images-gmi-pmc.edge-generalmills.com/0b874ab7-5bed-4467-9f6e-04c3d73d68b1.jpg",
  },
  {
    name: "Salt and Pepper Chicken",
    recipe: "https://www.bbcgoodfood.com/recipes/salt-pepper-chicken",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salt-pepper-chicken-5101b7d.jpg",
  },
  {
    name: "Gluten-Free Quinoa Salad-Stuffed Tomatoes",
    recipe: "https://www.bettycrocker.com/recipes/gluten-free-quinoa-salad-stuffed-tomatoes/eb61e416-d377-439e-aa5a-6267be1476dc",
    image: "https://images-gmi-pmc.edge-generalmills.com/c92826cd-ba34-47f9-9467-eaff3bb8c18d.jpg",
  },
  {
    name: "Ratatouille Polenta Bake",
    recipe: "https://www.bettycrocker.com/recipes/ratatouille-polenta-bake/82b26bae-bad9-4795-a746-88f42ea12902",
    image: "https://images-gmi-pmc.edge-generalmills.com/a0cd9f51-1ef9-446e-b9d6-b9617e04c379.jpg",
  }
];


// wait for button click
var breakfastContainer = $('.breakfastRecipe');
var breakfastButton = $('.breakfast');
breakfastButton.on("click", pickBreakfastGF);

// choose a random item from breakfast
function pickBreakfastGF() {
  var rand = Math.random()
  var rand1 = rand * breakfast.length
  var final = Math.floor(rand1)
  console.log(final)
  breakfastContainer.append(`<p><a href="${breakfast[final].recipe}">${breakfast[final].name}</a></p>
<img src="${breakfast[final].image}"><br>`)
}

// wait for button click
var lunchContainer = $('.lunchRecipe');
var lunchButton = $('.lunch');
lunchButton.on("click", pickLunch);

// choose a random item from lunch
function pickLunch() {
  var rand = Math.random()
  var rand1 = rand * lunchRecipes.length
  var final = Math.floor(rand1)
  console.log(final)
  lunchContainer.append(`<p><a href="${lunchRecipes[final].recipe}">${lunchRecipes[final].name}</a></p>
<img src="${lunchRecipes[final].image}"><br>`)
}

// wait for button click
var dinnerContainer = $('.dinnerRecipe');
var dinnerButton = $('.dinner');
dinnerButton.on("click", pickDinner);

// choose a random item from dinnerOptions
function pickDinner() {
  var rand = Math.random() * dinnerOptions.length
  var final = Math.floor(rand)
  console.log(final)
  dinnerContainer.append(`<p><a href="${dinnerOptions[final].recipe}">${dinnerOptions[final].name}</a></p>
<img src="${dinnerOptions[final].image}"><br>`)
}