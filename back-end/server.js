const express = require("express");
const mongoose = require("mongose");
const BodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const PORT = process.env.PORT || 8070