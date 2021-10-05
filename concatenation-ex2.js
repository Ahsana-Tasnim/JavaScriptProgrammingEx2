/* Concatenation ex-2
Ahsana Tasnim
ITPA-2021 */

let firstName = "Ahsana";
let lastName = "Tasnim";
let age = 21;
let city = "Dhaka";
let currentCity = "Moncton";
let maritalStatus = false;
let firstJob = "Walmart";
let hourlyRate = 12.10;
let currency = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(hourlyRate);

let outputOne = "Hello, " + firstName + " " + lastName + ". " +
"You are " + age + " years old and were born in " + city + ", " +
"and currently live in " + currentCity + "." + "\nYour first job was " +
"at " + firstJob + " making " +  currency + "/hour." + "\nI asked " +
"if you were married and you said " + maritalStatus + ".";

console.log(outputOne);