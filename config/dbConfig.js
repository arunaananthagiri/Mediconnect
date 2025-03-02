const mongoose = require("mongoose");
require("dotenv").config(); // Load .env variables

const mongoURI = process.env.MONGO_URL;

if (!mongoURI) {
  console.error("❌ MONGO_URL is not defined in the .env file");
  process.exit(1);
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("✅ Mongodb connection is successful.");
});

connection.on("error", (error) => {
  console.error("❌ Error in Mongodb connection:", error);
});

module.exports = mongoose;
