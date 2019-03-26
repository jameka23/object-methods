// =========================== lightning ex 1 ==================
/*
Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.
*/
const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";


const doctorBill = {
    officeName: "Providence Chiropractic Care",
    streetAddress: "132 Cumberland Drive",
    doctorName: "Dr. Benjamin Louie",
    patientName: "Jameka Echols",
    visitDate: "3-28-2019",
    amountBilled: 21.99,
    dueDate: "4-31-2019"
};

// =========================== lightning ex 2 ==================
/*
Lightning Exercise 2: Copy the code below and paste it above your object.
Use square bracket notation to output the value of those three properties to the console in Chrome.
*/

// const dateVisited = "visitDate";
// const owed = "amountBilled";
// const patient = "patientName";

// console.log(doctorBill[dateVisited]);
// console.log(doctorBill[owed]);
// console.log(doctorBill[patient]);

// =========================== lightning ex 3 ==================
/*
Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
*/

// for (const value of Object.values(doctorBill)){
//     console.log(value);
// };

// =========================== lightning ex 4 ==================
/*
Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.
 */
// for (const value of Object.keys(doctorBill)){
//     console.log(value);
// };
// console.log(Object.keys(doctorBill));


// =========================== lightning ex 5 ==================
/*
Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
*/

const docContainer = document.querySelector("#doctors-container");
const parentSection = document.createElement("section");

parentSection.innerHTML += "<h2>Key Names</h2>";
for(const key of Object.keys(doctorBill)){
    const doctorKeySpan = document.createElement("div");
    doctorKeySpan.textContent = key;
    parentSection.appendChild(doctorKeySpan);
}
docContainer.appendChild(parentSection);


