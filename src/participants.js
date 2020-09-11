async function readAllParticipants(database) {
  const getAllParticipants = await database.collection("participants").find({});
  return getAllParticipants.toArray();
}

async function searchOneParticipant(database, searchKey) {
  const findParticipant = await database
    .collection("participants")
    .findeOne(searchKey);
  return findParticipant;
}

exports.readAllParticipants = readAllParticipants;
exports.searchOneParticipant = searchOneParticipant;
