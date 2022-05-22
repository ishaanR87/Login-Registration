const mongoose = require("mongoose");
const nconf = require("nconf");
const chalk = require("chalk");

mongoose.connect(nconf.get("mongodbURL"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// validate MongoDB connection
const db = mongoose.connection;

// events

db.on("error", () => {
  console.log("MongoDB connection error");
  process.exit(0);
});

db.once("open", function (callback) {
  console.log(
    `Connected to ${chalk.green("MongoDB")} Successfully...`
  );
});

module.exports = {
  mongoConnection: db,
};
