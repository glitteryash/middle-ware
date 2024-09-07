const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
app.use((req, res, next) => {
  console.log(req.method);
  next();
});

// mongoose
//   .connect("mongodb://localhost:27017/test", {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to mongodb.");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

app.get("/", (req, res) => {
  res.sends("Welcome to homepage.");
});

//Error handlers
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something is broken");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
