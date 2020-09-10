require("dotenv").config();
const faker = require("faker/locale/de");
const { MongoClient } = require("mongodb");

const dbclient = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
});

function getRandomeBirth() {
  const day = Math.floor(Math.random() * (31 - 1)) + 1;
  const month = Math.floor(Math.random() * (12 - 1)) + 1;
  const year = Math.floor(Math.random() * (2002 - 1920)) + 1920;
  const birthDate = `${day}.${month}.${year}`;

  return birthDate;
}

async function generateFakeParticipants(startValue, generateValue) {
  try {
    await dbclient.connect();
    const database = dbclient.db(process.env.MONGO_DB_NAME);
    const collection = database.collection("participants");

    for (let index = startValue; index <= generateValue; index++) {
      let participant = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthDate: getRandomeBirth(),
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
      await collection.insertOne(participant);
    }
  } catch (error) {
    //Ensures that the client will close when you finish/error
    await dbclient.close();
    console.error(error);
  }
}

generateFakeParticipants(0, 99);
