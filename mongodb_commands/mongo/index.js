const mongoose = require("mongoose");

// using async/await to connect to MongoDB

main
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
}
