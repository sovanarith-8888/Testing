"use strict";
const welcome = "Welcome to our new journal.";
console.log(welcome, typeof welcome);
// Explicit assignment
const strName = "Hong Leng";
// Implicit assignment
const strInfo = "Open";
//strInfo = 5; //Error type
// Built in type script
let sales = 123560909;
console.log(sales);
if (sales == 123560909)
    console.log("truesfy"); // true
console.log(0.1 + 0.3);
let mySales = 444;
let course = "ReactJS Advances";
let level = 1;
level = "Hard";
let duration;
duration = 25;
duration = "44h";
function render(doc) {
    console.log("Render what i want");
}
render();
let nums = [1, 2, 3]; // Array of number
let colors = ["red", "green", "yellow"]; // Array of string
// Turple fix value of array
let users = [1, "Rith", true, "Haha", 7, null];
users.push("new sub");
console.log(users);
// Enum
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wendesday"] = 2] = "Wendesday";
    Weekday[Weekday["Thurday"] = 3] = "Thurday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["Created"] = 201] = "Created";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
})(HttpStatus || (HttpStatus = {}));
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Meduim"] = 5] = "Meduim";
    Size[Size["Large"] = 10] = "Large";
})(Size || (Size = {}));
console.log(Size.Small);
let mySize = Size.Small;
console.log("-", mySize);
function getTime() {
    return new Date().getTime();
}
function calSalary(income) {
    return (income || 3) * 2;
}
function printStatement() {
    console.log("success");
    //return null; Error
}
console.log(calSalary());
// object
let employee = { id: 1, name: "Rith", retire: (date) => {
        console.log("");
    } };
let em = {
    id: 1,
    name: "",
    retire: (date) => console.log()
};
// Union type
function KgLog(weight) {
    return weight;
}
