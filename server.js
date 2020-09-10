require("dotenv").config();
const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const createParticipantsRouter = require("./routes/createParticipantsRouter");

const dbClient = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
});
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(`Request ${req.method} on ${req.body}`);
  next();
});

async function server() {
  try {
    await dbClient.connect();
    const database = dbClient.db(process.env.MONGO_DB_NAME);

    app.use("/api/participant", createParticipantsRouter(database));

    app.listen(port, () => {
      console.log(`Redy!! App is listening on http://localhost:${port}`);
    });
  } catch (error) {
    //Ensures that the client will close when you finish/error
    await dbClient.close();
    console.error(error);
  }
}

server();

// // Serve any static files
// app.use(express.static(path.join(__dirname, "client/build")));
// app.use(
//   "/storybook",
//   express.static(path.join(__dirname, "client/storybook-static"))
// );

// // Handle React routing, return all requests to React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

// app.listen(port, () => {
//   console.log(`Server is Ready! Server listening at http://localhost:${port}`);
// });
