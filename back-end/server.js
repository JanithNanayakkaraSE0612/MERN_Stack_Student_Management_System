const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// Corrected connection options:
mongoose.connect(URL, { useCreateIndex:true,useNewUrlParser:true, useUnifiedTopology: true,useFindAndModify:false }); // Only keep supported option

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection successful");
});

const StudentRouter = require("./routes/student.js");
app.use("/student",StudentRouter);
app.listen(PORT, () => {
  console.log("Server up and running on port", PORT);
});
