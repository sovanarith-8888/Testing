"use strict";
// TypeSCript Null & Undefined
let value = null;
value = "Hello me";
value = null;
function printPersonProperties(person, properties) {
    console.log("Print now " + person[properties]);
}
let person = {
    name: "Max",
    age: 27
};
printPersonProperties(person, "name");
let pointPart = {};
// Basic generic, allow crting type variables which can be used to crate classes 
