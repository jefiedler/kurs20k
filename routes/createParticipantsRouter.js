const express = require("express");
const { readAllParticipants } = require("../src/participants");

function createParticipantsRouter(database) {
  const router = express.Router();

  router.get("/all", async (req, res) => {
    try {
      const getParticipants = await readAllParticipants(database);
      if (!getParticipants) {
        res.status(404).send(`Read Datapase faild`);
        return;
      }
      res.status(200).send(getParticipants);
    } catch (error) {
      console.error("Somthing went wrong", error);
      res.status(500).send(error.massage);
    }
  });
  return router;
}

module.exports = createParticipantsRouter;
