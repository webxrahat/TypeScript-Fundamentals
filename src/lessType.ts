// Union types

let status: "success" | "error" | "loading" = "loading";

function updateStatus(newStatus: "success" | "error" | "loading"): void {
  status = newStatus;
  console.log(`Status updated to: ${status}`);
}

updateStatus("success");

// Type aliases

type ID = string | number;

function printID(id: ID): void {
  console.log(`ID: ${id}`);
}

printID("abc123");
printID(456789);

// Intersection types

interface Address {
  street: string;
  city: string;
  country: string;
}

interface Contact {
  email: string;
  phone: string;
}

type PersonInfo = Address & Contact;

function displayPersonInfo(info: PersonInfo): void {
  console.log(
    `Address: ${info.street}, ${info.city}, ${info.country}. Contact: ${info.email}, ${info.phone}`
  );
}

const personDetails: PersonInfo = {
  street: "123 Main St",
  city: "Anytown",
  country: "USA",
  email: "alice@example.com",
  phone: "555-1234",
};

displayPersonInfo(personDetails);

// Literal types

function setDirection(direction: "up" | "down" | "left" | "right"): void {
  console.log(`Direction set to: ${direction}`);
}

setDirection("up");
setDirection("left");
