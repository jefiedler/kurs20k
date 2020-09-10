async function readAllParticipants(database) {
  const collection = database.collection("participants");
  const allParticipants = collection.find({});
  if (!allParticipants) {
    return null;
  }
  return allParticipants;
}

exports.readAllParticipants = readAllParticipants;
