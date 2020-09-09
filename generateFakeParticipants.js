require("dotenv").config();
const faker = require("faker");
const { fake } = require("faker");

function generateFakeParticipants() {
  let participant = {};

  for (let index = 0; index <= 10; index++) {
    let participant = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      street: faker.address.streetName() + " " + index,
      zipCode: faker.address.zipCode(),
      city: faker.address.city(),
      country: faker.address.country(),
      email: faker.internet.email(),
      landline: faker.phone.phoneNumber(),
      mobile: faker.phone.phoneNumber(),
    };
    console.log(participant);
  }
  return participant;
}

generateFakeParticipants();
