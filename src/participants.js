async function readAllParticipants(database) {
  const collection = database.collection("participants");
  const allParticipants = collection.find({});
  console.log(typeof allParticipants);
  const participants = JSON.stringify(allParticipants);
  if (!participants) {
    return null;
  }
  return participants;
}

exports.readAllParticipants = readAllParticipants;
