async function readAllParticipants(database) {
  const allParticipants = await database.collection("participants").find({});
  return allParticipants.toArray();
}

exports.readAllParticipants = readAllParticipants;
