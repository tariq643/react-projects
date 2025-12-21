const mongoose = require("mongoose");

main
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
}
