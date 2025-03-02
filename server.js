const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5002;

console.log("MONGO_URL:", process.env.MONGO_URL);

app.listen(port, () => console.log(`Node server started at port : ${port}`));

app.use("/api/users", userRoute);
