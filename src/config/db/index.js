const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://choilv:7nZtxsANLlHdvTud@cluster0.hufjsck.mongodb.net/f8_education_dev"
    );
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect fail", error);
  }
}

module.exports = { connect };
