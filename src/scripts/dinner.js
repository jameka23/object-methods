// =========================== lightning ex 1 ==================
/*
Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.
*/
const friedChicken = {
    ethnicity: "Southern American",
    weight: "4 pc",
    vegetarian: false,
    sides: "collard greens"
};


// =========================== lightning ex 2 ==================
/*
Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.
 */
const foodContainer = document.querySelector("#favorite-dinner");
foodContainer.innerHTML += "<h2>Favorite Dinner</h2>";

for(const entry of Object.entries(friedChicken)){
    const foodArticle = document.createElement("article");
    foodArticle.textContent = `${entry[0]}: ${entry[1]}`;
    foodContainer.appendChild(foodArticle);
}