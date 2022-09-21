const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete);

module.exports = mongoose.model("Course", Course);
