const express = require("express");
const { readAllParticipants } = require("../src/participants");

function createParticipantsRouter(database) {
  const router = express.Router();

  router.get("/all", async (req, res) => {
    try {
      const participants = await readAllParticipants(database);
      if (!participants) {
        res.status(404).send(`Read Datapase faild`);
        return;
      }
      res.status(200).send(`All participants are found ${participants}`);
    } catch (error) {
      console.error("Somthing went wrong", error);
      res.status(500).send(error.massage);
    }
  });

  // router.get("/all", async (req, res) => {
  //     try{

  //     } catch (error){

  //     }
  // })

  // router.post("/create", async (req, res) => {
  //     try{

  //     } catch (error){

  //     }
  // })
}

module.exports = createParticipantsRouter;
