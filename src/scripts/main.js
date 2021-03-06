console.log("Hey, bud!");

const mustang = {
    color: "Midnight Blue",
    year: 1976,
    length: 120,
    width: 62,
    height: 47
}

// Dot notation
// console.log(mustang.color); // Midnight Blue

// // Square bracket notation
// console.log(mustang["color"]); //Midnight Blue

// // Dynamic square bracket notation
// const colorProperty = "color";
// console.log(mustang[colorProperty]); //Midnight Blue


const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

// ==================== Object.values() ======================
// list out all the values of the array

const outputElement = document.querySelector("#display-container");

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {
    // ======================= for Of loop ====================
    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value} </div>`
    }
})


// ==================== Object.keys() ======================
/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})

// ==================== Object.entries() ======================
/*
 Remember to use backticks when you are building string templates to interpolate variables in JavaScript. It's a common oversight for new developers.

const bug = {
    flying: true,
    legs: 6
}

for (const entry of Object.entries(bug)) {
    console.log(entry)
}

array of arrays
> [ 'flying', true ]  RETURNS AN ARRAY!!!!!!!!
> [ 'legs', 6 ]​​​​​
*/
outputElement.innerHTML += "<h1>Car List</h1>"

allCars.forEach(car => {
    outputElement.innerHTML += "<hr/>"
    const arrayOfObjectEntries = Object.entries(car)
    for (const keyValueArray of arrayOfObjectEntries) {
        outputElement.innerHTML += `<div>${keyValueArray[0]}: ${keyValueArray[1]}</div>`
    }
});


