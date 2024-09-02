const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
app.use((req, res, next) => {
  console.log("Hi! This is a first middleware.");
  next();
});
app.use((req, res, next) => {
  console.log("Hi! This is a second middleware.");
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
  res.send("Welcome to homepage.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
