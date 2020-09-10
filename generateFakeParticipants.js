require("dotenv").config();
const faker = require("faker/locale/de");

function getRandomeBirth() {
  const day = Math.floor(Math.random() * (31 - 1)) + 1;
  const month = Math.floor(Math.random() * (12 - 1)) + 1;
  const year = Math.floor(Math.random() * (2002 - 1920)) + 1920;
  const birthDate = `${day}.${month}.${year}`;

  return birthDate;
}

function generateFakeParticipants() {
  let participant = {};

  for (let index = 0; index <= 10; index++) {
    let participant = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthdDate: getRandomeBirth(),
      street:
        faker.address.streetName() +
        " " +
        Math.floor(Math.random() * (1000 - 1)),
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
