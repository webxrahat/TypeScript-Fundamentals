interface Person {
  name: string;
  age: number;
}

export function introduce(person: Person): string {
  return `My name is ${person.name} and I am ${person.age} years old.`;
}

const individual: Person = { name: "Alice", age: 30 };
console.log(introduce(individual));
// Type annotations
let city: string = "New York";
let population: number = 8419600;
let isCapital: boolean = false;
let landmarks: string[] = [
  "Statue of Liberty",
  "Central Park",
  "Empire State Building",
];

function multiply(x: number, y: number): number {
  return x * y;
}
console.log(multiply(7, 6));

function displayCityInfo(city: string, population: number): void {
  console.log(`${city} has a population of ${population}.`);
}
displayCityInfo(city, population);

// Interface
interface City {
  name: string;
  population: number;
  isCapital: boolean;
  landmarks: string[];
}

// Function with type annotations
function describeCity(city: City): string {
  return `${city.name} is a city with a population of ${
    city.population
  }. It is ${
    city.isCapital ? "" : "not "
  }the capital city. Famous landmarks include: ${city.landmarks.join(", ")}.`;
}

console.log(describeCity({ name: city, population, isCapital, landmarks }));
