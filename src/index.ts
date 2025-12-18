import type Direction from "./enum.ts";

export function frok(person: string): string {
  return `Hello, ${person}!`;
}

const user = "World";
console.log(frok(user));

// Type annotations
let name: string = "John Doe";
let age: number = 35;
let isEnrolled: boolean = true;
let hobbies: string[] = ["Reading", "Traveling", "Swimming"];

function add(x: number, y: number): number {
  return x + y;
}
console.log(add(5, 10));

function greet(name: string): void {
  console.log(`Hello Mr. ${name}.`);
}
greet(name);

// Interface
interface Student {
  name: string;
  age: number;
  isEnrolled: boolean;
  hobbies: string[];
}

// Function with type annotations
function enrollStudent(student: Student): string {
  return `${student.name} has been enrolled.`;
}

console.log(enrollStudent({ name, age, isEnrolled, hobbies }));
