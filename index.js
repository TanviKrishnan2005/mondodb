const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);

console.log("MONGO_URI from .env:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(3000, () => console.log("Server running on 3000")))
  .catch((err) => console.log(err));
