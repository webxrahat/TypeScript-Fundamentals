type Book = {
  title: string;
};

let bookJson = '{"title": "TypeScript Basics"}';

let myBook = JSON.parse(bookJson) as Book;

console.log(`Book Title: ${myBook.title}`);

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log("An unknown error occurred.");
  }
}

const someValue: unknown = "This is a string";
const srtNumber: string = someValue as string;
console.log(`String Value: ${srtNumber}`);
