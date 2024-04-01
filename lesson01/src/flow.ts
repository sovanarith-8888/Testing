// TypeSCript Null & Undefined
let value: string | undefined | null = null;
value = "Hello me";
value = null;

//Optional Chaining ?.
interface House{
  sqft: number;
  yard? : {
    sqft: number;
  }
}

// Keyof wth explicit keys
interface Person{
  name: string,
  age: number,
}
function printPersonProperties(person: Person, properties: keyof Person){
  console.log("Print now " + person[properties])
}
let person = {
  name: "Max",
  age: 27
};
printPersonProperties(person,"name")

// TypeScript Utility Types
interface Point{
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}

// Basic generic, allow crting type variables which can be used to crate classes 
