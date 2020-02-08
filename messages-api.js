const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const movies = require("./Movie/model");
console.log("I WANT TO SEE", movies);

const db = require("./sequelize-rest.js");
console.log("SEE THIS", db);

const movieRouter = require("./Movie/router");

app.post("/", (req, res, next) => {
  const messages = {
    message: "This is the message that was sent"
  };
  try {
    if (messages.message === "") {
      res.status(400).send("Bad Request");
    } else {
      res.json(messages);
    }
  } catch (error) {
    next(error);
  }
});

app.use(bodyParser.json());
app.use(movieRouter);
app.listen(port, () => console.log(`listening on port: ${port}`));
