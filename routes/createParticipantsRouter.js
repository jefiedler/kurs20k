const express = require("express");
const {
  readAllParticipants,
  searchOneParticipant,
} = require("../src/participants");

function createParticipantsRouter(database) {
  const router = express.Router();

  router.get("/all", async (req, res) => {
    try {
      const getParticipants = await readAllParticipants(database);
      if (!getParticipants) {
        res.status(404).send(`Read Database faild`);
        return;
      }
      res.status(200).send(getParticipants);
    } catch (error) {
      console.error("Somthing went wrong", error);
      res.status(500).send(error.massage);
    }
  });

  router.get("/:findeOne", async (req, res) => {
    try {
      const { searchValue } = req.params;

      const findOneParticipant = await searchOneParticipant(
        database,
        searchValue
      );
      if (!findOneParticipant) {
        res.status(404).send("No participant find");
      }
      res.status(200).send("Participant find");
    } catch (error) {
      console.error("Somthing went wrong", error);
      res.status(500).send(error.massage);
    }
  });
  return router;
}

module.exports = createParticipantsRouter;
