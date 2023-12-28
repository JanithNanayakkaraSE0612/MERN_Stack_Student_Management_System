const express = require("express");
const mongoose = require("mongose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const PORT = process.env.PORT || 8070

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    UseCreateIndex: true.
    (property) useUnifiedTopologyL: Boolean
    useUnifiedTopologyL: true,
    useFindAndModify: false
})