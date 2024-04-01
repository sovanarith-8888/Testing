const welcome: string = "Welcome to our new journal.";
console.log(welcome, typeof welcome);

// Explicit assignment
const strName: string = "Hong Leng";
// Implicit assignment
const strInfo = "Open";
//strInfo = 5; //Error type

// Built in type script
let sales:number = 123_560_909;
console.log(sales)

if(sales == 123560909) console.log("truesfy") // true
console.log(0.1 + 0.3)

let mySales: number = 444;
let course: string = "ReactJS Advances";
let level: any = 1;
level = "Hard";
let duration: unknown;
duration = 25;
duration = "44h"

function render(doc?: unknown){
  console.log("Render what i want")
} render()

let nums: number[] = [1,2,3];// Array of number
let colors: string[] = ["red","green","yellow"]; // Array of string

// Turple fix value of array
let users: [number,string,boolean,unknown,any,null] = [1,"Rith",true,"Haha",7,null]
users.push("new sub")
console.log(users)

// Enum
enum TrafficLight{
  Red,
  Yellow,
  Green,
}
enum Weekday{
  "Monday",
  "Tuesday",
  "Wendesday",
  "Thurday",
  "Friday",
  "Saturday",
  "Sunday"
}
enum HttpStatus{
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
}
enum Size{
  Small,
  Meduim = 5,
  Large = 10
}
console.log(Size.Small)
let mySize: Size = Size.Small;
console.log("-",mySize)

function getTime(): number{
  return new Date().getTime();
}
function calSalary(income?: number): number{
  return (income || 3 )* 2;
}
function printStatement(): void{
  console.log("success")
  //return null; Error
}
console.log(calSalary())

// object
let employee:{
  id: number,
   readonly name: string,
   retire: (date: Date) => void;
} = {id: 1,name: "Rith", retire: (date: Date) => {
  console.log("")
}}

//employee.name  = "Rith2" cannot modifies
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let em: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => console.log()
}
type AliasName = string;
type ProductId = string;
type Age = number;
interface User{
  id: ProductId,
  age: Age
}

type kgLogType = number | string // type aslias with union type
// Union type
function KgLog(weight: kgLogType):kgLogType{
  return weight;
}